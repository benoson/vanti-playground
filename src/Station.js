import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ProductionLine from "./ProductionLine";
import Popover from "@mui/material/Popover";
import { Button, Slider, TextField } from "@mui/material";

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
    margin: "auto auto 5px auto",
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
});

const Station = ({
  id,
  name,
  pricePerProduct,
  volumePerMinute,
  shouldDisplayProdLine,
}) => {
  const classes = useStyles();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [marks, setMarks] = useState([
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 100,
      label: "100°C",
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
      <div className={classes.dashedLine}>{name}</div>

      <div className={classes.mainSection}>
        {shouldDisplayProdLine && <ProductionLine />}
        <div className={classes.main} onClick={onStationClick}>
          <Popover
            id={id}
            open={isPopupOpen}
            anchorEl={anchorEl}
            onClose={() => {}}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
          >
            <div className={classes.popupContent}>
              <TextField
                type="number"
                label="Cost of Failures"
                variant="outlined"
                defaultValue={pricePerProduct}
              />
              <TextField
                type="number"
                label="Cost of units"
                variant="outlined"
                defaultValue={volumePerMinute}
                margin="normal"
              />
              <TextField
                type="number"
                label="Volume"
                variant="outlined"
                defaultValue={volumePerMinute}
                margin="normal"
              />
              <TextField
                type="number"
                label="Failure Rate"
                variant="outlined"
                defaultValue={volumePerMinute}
                margin="normal"
              />
              <Slider
                aria-label="Custom marks"
                defaultValue={50}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
              <Slider
                aria-label="Custom marks"
                defaultValue={50}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
              <Button
                variant="outlined"
                className={classes.button}
                onClick={onFormFinishClick}
              >
                OK
              </Button>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Station;
