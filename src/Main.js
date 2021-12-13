import React, { useEffect, useState } from "react";
import { Slider, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Forms from "./Forms";
const useStyles = makeStyles({
  main: {
    position: "relative",
  },
  slider: {
    width: "80% !important",
  },
  firstSlider: {
    width: "80% !important",
    marginBottom: "0px !important",
  },
  card: {
    width: "50%",
    margin: "1rem auto",
    padding: 25,
    background: "white",
    borderRadius: 10,
  },
  inputPrice: {
    background: "pink",
  },
  title: {
    color: "white",
  },
  detectionRateText: {
    fontWeight: "bold !important",
    fontSize: "20px !important",
    marginBottom: "35px !important",
    color: "purple !important",
  },
  flowNumber: {
    color: "black",
    fontSize: 24,
    borderRadius: "50%",
    backgroundColor: "#0effbc",
    padding: "20px 30px",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  },
});

const calcROI = (
  vanti_savings,
  false_positive,
  volume,
  failureRate,
  costOfUnit,
  costOfFailure
) => {
  const true_positive =
    (vanti_savings / volume + (1 - failureRate) * false_positive * costOfUnit) /
    (failureRate * costOfFailure);

  return true_positive;
};

const Main = () => {
  const classes = useStyles();

  const [moneyToSave, setMoneyToSave] = useState(0);
  const [falsePositiveValue, setFalsePositiveValue] = useState(50);
  const [detectionRate, setDetectionRate] = useState(0);

  const [marks, setMarks] = useState([
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ]);
  const [falsePositiveMarks, setFalsePositiveMarks] = useState([
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ]);

  const [data, setData] = useState({
    costOfFailures: 0,
    costOfUnits: 0,
    volume: 0,
    failureRate: 0,
    moneyToSave,
  });

  const onDataChange = (costOfFailures, costOfUnits, volume, failureRate) => {
    const newState = {
      ...data,
      costOfFailures,
      costOfUnits,
      volume,
      failureRate,
    };
    setData(newState);
  };

  const onMoneyToSaveChange = (newMoneyToSave) => {
    const newState = {
      ...data,
      moneyToSave: newMoneyToSave,
    };
    setMoneyToSave(newMoneyToSave);
    setData(newState);
  };

  const onFalsePositiveValueChanged = (newFalsePositive) => {
    const newState = {
      ...data,
      falsePositiveValue: newFalsePositive,
    };

    setFalsePositiveValue(newFalsePositive);
    setData(newState);
  };

  useEffect(() => {
    const truePositive = calcROI(
      moneyToSave,
      falsePositiveValue / 100,
      data.volume,
      data.failureRate / 100,
      data.costOfUnits,
      data.costOfFailures
    );

    if (truePositive >= 100) {
      setDetectionRate(100);
    } else if (truePositive <= 0) {
      setDetectionRate(0);
    } else {
      setDetectionRate(truePositive || "");
    }
  }, [data]);

  return (
    <div className={classes.main}>
      <div className={classes.flowNumber}>1</div>

      <h1 className={classes.title}> Vanti Saves Your Money.</h1>

      <Forms onDataChange={onDataChange} />

      <div className={classes.card}>
        <Typography>Desired Amount To Save</Typography>
        <TextField
          type="number"
          variant="filled"
          margin="normal"
          className="inputPrice"
          value={moneyToSave}
          onChange={(e) => {
            onMoneyToSaveChange(+e.target.value);
          }}
        />
      </div>

      <div className={classes.card}>
        <Typography> False Positive </Typography>

        <Slider
          aria-label="Custom marks"
          defaultValue={falsePositiveValue}
          value={falsePositiveValue}
          onChange={(e) => {
            onFalsePositiveValueChanged(e.target.value);
          }}
          step={1}
          valueLabelDisplay="auto"
          marks={falsePositiveMarks}
          className={classes.slider}
        />
      </div>

      <div className={classes.card}>
        <Typography> Detection Rate </Typography>

        <Slider
          aria-label="Custom marks"
          defaultValue={50}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
          disabled
          value={detectionRate}
          className={classes.firstSlider}
        />

        <Typography className={classes.detectionRateText}>
          {detectionRate}
        </Typography>
      </div>
    </div>
  );
};
export default Main;
