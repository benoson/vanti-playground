import { Slider, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
const useStyles = makeStyles({
  card: {
    width: "50%",
    margin: "1rem auto",
    padding: 25,
    display: "flex",
    flexDirection: "column",
    background: "white",
    borderRadius: 10,
  },
});

const Forms = ({ onDataChange }) => {
  const classes = useStyles();

  const [costOfFailures, setCostOfFailures] = useState(0);
  const [costOfUnits, setCostOfUnits] = useState(0);
  const [volume, setVolume] = useState(0);
  const [failureRate, setFailureRate] = useState(0);

  const marks = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  useEffect(() => {
    onDataChange(costOfFailures, costOfUnits, volume, failureRate);
  }, [costOfFailures, costOfUnits, volume, failureRate]);

  return (
    <div className={classes.card}>
      <TextField
        type="number"
        label="Cost of Failures"
        variant="outlined"
        value={costOfFailures}
        onChange={(e) => {
          setCostOfFailures(+e.target.value);
        }}
        margin="normal"
      />
      <TextField
        type="number"
        label="Cost of units"
        variant="outlined"
        value={costOfUnits}
        onChange={(e) => {
          setCostOfUnits(+e.target.value);
        }}
        margin="normal"
      />
      <TextField
        type="number"
        label="Volume"
        variant="outlined"
        value={volume}
        onChange={(e) => {
          setVolume(+e.target.value);
        }}
        margin="normal"
      />
      <Typography>Failure Rate</Typography>
      <Slider
        aria-label="Custom marks"
        defaultValue={failureRate}
        value={failureRate}
        onChange={(e) => {
          setFailureRate(e.target.value);
        }}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        className={classes.slider}
      />
    </div>
  );
};
export default Forms;
