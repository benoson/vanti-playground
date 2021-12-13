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
    color: "black",
    height: 100,
    padding: "15px 30px",
    width: 200,
    cursor: "pointer",
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
const VantiSquare = ({ shouldDisplayArrow, index, sliderVal }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainSection}>
      {shouldDisplayArrow && (
        <img src={arrowImage} className={classes.arrowImage} />
      )}
      <div className={classes.main}>
        <Typography fontSize="14px">Faults Found: 0 </Typography>
        <Typography fontSize="14px">
          Station {index} eff. yield: {95 + index + 0.01 * sliderVal}%
        </Typography>
      </div>
    </div>
  );
};
export default VantiSquare;
