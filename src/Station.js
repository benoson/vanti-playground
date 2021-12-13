import React from "react";
import { makeStyles } from "@mui/styles";
import ProductionLine from "./ProductionLine";

const useStyles = makeStyles({
  root: {
    marginBottom: 10,
  },
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
    marginLeft: "auto",
    padding: 5,
    width: "fit-content",
  },
  mainSection: {
    display: "flex",
    alignItems: "center",
  },
});

const Station = ({
  name,
  pricePerProduct,
  volumePerMinute,
  shouldDisplayProdLine,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.dashedLine}>{name}</div>

      <div className={classes.mainSection}>
        {shouldDisplayProdLine && <ProductionLine />}
        <div className={classes.main}></div>
      </div>
    </div>
  );
};

export default Station;
