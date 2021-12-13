import {
  Card,
  CardActions,
  CardContent,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  card: {
    width: "50%",
    margin: "1rem auto",
    padding: 25,
    boxShadow: "-9px 8px 1px 1px #52de97 !important",
    border: "1px solid lightslategrey",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 3,
  },
  slider: {
    width: "80% !important",
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
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
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

        <Typography>Desired Amount To Save: {moneyToSave}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
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
      </CardActions>
    </Card>
  );
};

export default Main;
