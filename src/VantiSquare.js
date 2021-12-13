import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import arrowImage from "./arrow-right.png";

const useStyles = makeStyles({
  mainSection: {
    display: "flex",
    alignItems: "center",
  },
  main: {
    background: "linear-gradient(45deg, #52de97 30%, #52de97 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 100,
    padding: "0 30px",
    width: 150,
    cursor: "pointer",
  },
  arrowImage: {
    width: 64,
    marginRight: 10,
    marginLeft: 10,
  },
});

const VantiSquare = ({ shouldDisplayArrow, index }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainSection}>
      {shouldDisplayArrow && (
        <img src={arrowImage} className={classes.arrowImage} />
      )}
      <div className={classes.main}>
        <Typography fontSize="14px">Faults Found: 377</Typography>
        <Typography fontSize="14px">Station {index} eff. yield: 95%</Typography>
      </div>
    </div>
  );
};

export default VantiSquare;
