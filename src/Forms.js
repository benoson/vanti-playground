import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  card: {
    width: "50%",
    margin: "1rem auto",
    padding: 25,
    boxShadow: "-9px 8px 1px 1px #52de97 !important",
    display: "flex",
    flexDirection: "column",
  },
});

const Forms = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <TextField
        type="number"
        label="Cost of Failures"
        variant="outlined"
        defaultValue={0}
        margin="normal"
      />
      <TextField
        type="number"
        label="Cost of units"
        variant="outlined"
        defaultValue={0}
        margin="normal"
      />
      <TextField
        type="number"
        label="Volume"
        variant="outlined"
        defaultValue={0}
        margin="normal"
      />
      <TextField
        type="number"
        label="Failure Rate"
        variant="outlined"
        defaultValue={0}
        margin="normal"
      />
    </div>
  );
};

export default Forms;
