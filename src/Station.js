import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ProductionLine from "./ProductionLine";
import Popover from "@mui/material/Popover";
import { Button, Slider, TextField, Typography } from "@mui/material";
import arrowImage from "./left-arrow.png";
const useStyles = makeStyles({
  root: {
    marginBottom: 10,
  },
  main: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 10,
    color: "white",
    height: 150,
    padding: "0 30px",
    width: 250,
    cursor: "pointer",
    "&:hover": {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
  dashedLine: {
    border: "1px dashed lightslategrey",
    borderRadius: 5,
    margin: "auto auto 5px 0",
    padding: 5,
    width: "fit-content",
  },
  mainSection: {
    display: "flex",
    alignItems: "center",
  },
  popupContent: {
    padding: 25,
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
  },
  button: {
    marginTop: "15px !important",
  },
  arrowImage: {
    width: "70px",
    transform: "scaleX(-1) scaleY(1)",
    marginBottom: 25,
  },
  arrowImageFlipped: {
    width: "70px",
    transform: "scaleX(-1) scaleY(-1)",
    marginTop: 25,
  },
  arrowsSection: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
    marginRight: 15,
  },
  slider: {
    width: "80% !important",
  },
});
const Station = ({
  id,
  name,
  pricePerProduct,
  volumePerMinute,
  shouldDisplayProdLine,
  shouldDisplayArrows,
  sliderVal,
  onStationValueChange,
}) => {
  const classes = useStyles();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [marks, setMarks] = useState([
    {
      value: 0,
      label: "0$",
    },
    {
      value: 100,
      label: "100$",
    },
  ]);
  const onStationClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsPopupOpen(true);
  };
  const onFormFinishClick = (event) => {
    setIsPopupOpen(false);
    event.stopPropagation();
  };
  return (
    <div className={classes.root}>
      {/* <div className={classes.dashedLine}>{name}</div> */}
      <div className={classes.mainSection}>
        {/* {shouldDisplayProdLine && <ProductionLine />} */}
        <div className={classes.main} onClick={onStationClick}>
          <h4> Failure Rate </h4>
          <Slider
            aria-label="Custom marks"
            defaultValue={50}
            step={10}
            default={50}
            valueLabelDisplay="auto"
            marks={marks}
            className={classes.slider}
            value={sliderVal}
            onChange={(e) => onStationValueChange(e.target.value)}
          />
        </div>
        {shouldDisplayArrows && (
          <div className={classes.arrowsSection}>
            <img className={classes.arrowImage} src={arrowImage} />
            <img className={classes.arrowImageFlipped} src={arrowImage} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Station;
