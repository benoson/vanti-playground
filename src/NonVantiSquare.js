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
    background: "linear-gradient(45deg, #CD5C5C 30%, #056434 90%)",
    border: 0,
    borderRadius: 10,
    color: "white",
    height: 100,
    padding: "15px 30px",
    width: 200,
    cursor: "pointer",
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  arrowImage: {
    width: 64,
    marginRight: 10,
    marginLeft: 10,
  },
});
const NonVantiSquare = ({ shouldDisplayArrow, index }) => {
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
export default NonVantiSquare;
