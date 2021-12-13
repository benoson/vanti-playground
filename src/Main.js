import React, { useState } from "react";
import { Slider, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Forms from "./Forms";

const useStyles = makeStyles({
  slider: {
    width: "80% !important",
  },
  card: {
    width: "50%",
    margin: "1rem auto",
    padding: 25,
    boxShadow: "-9px 8px 1px 1px #52de97 !important",
  },
});

const Main = () => {
  const classes = useStyles();
  const [moneyToSave, setMoneyToSave] = useState(0);
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

  return (
    <div>
      <Forms />

      <div className={classes.card}>
        <Typography>Desired Amount To Save</Typography>

        <TextField
          type="number"
          variant="filled"
          defaultValue={0}
          margin="normal"
        />
      </div>

      <div className={classes.card}>
        <Slider
          aria-label="Custom marks"
          defaultValue={50}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
          disabled
          className={classes.slider}
        />
        <Slider
          aria-label="Custom marks"
          defaultValue={50}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
          disabled
          className={classes.slider}
        />
      </div>
    </div>
  );
};

export default Main;
