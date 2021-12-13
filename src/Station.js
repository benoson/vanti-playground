import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 100,
    padding: "0 30px",
    width: 150,
    cursor: "pointer",
    "&:hover": {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
  dashedLine: {
    border: "1px dashed lightslategrey",
    borderRadius: 5,
    marginBottom: "5px",
    padding: 5,
  },
});

const Station = ({ name, pricePerProduct, volumePerMinute }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.dashedLine}>{name}</div>

      <div className={classes.main}></div>
    </div>
  );
};

export default Station;
