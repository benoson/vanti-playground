import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: 100,
    height: 10,
    borderTop: "1px dashed lightslategrey",
    borderBottom: "1px dashed lightslategrey",
  },
});

const ProductionLine = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default ProductionLine;
