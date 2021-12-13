import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Station from "./Station";
import { Button, Typography } from "@mui/material";
import VantiSquare from "./VantiSquare";
import NonVantiSquare from "./NonVantiSquare";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 30,
  },
  button: {
    marginLeft: "50px !important",
  },
  VantiNonVantiSection: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 25,
  },
});
const PlaygroundContainer = () => {
  const classes = useStyles();
  const [sliderVal, setSliderVal] = useState(null);
  const [allStations, setNewStation] = useState([
    {
      id: 0,
      name: "Station #1",
      pricePerProduct: 0.4,
      volumePerMinute: 10,
    },
    {
      id: 1,
      name: "Station #1",
      pricePerProduct: 0.4,
      volumePerMinute: 10,
    },
    {
      id: 1,
      name: "Station #1",
      pricePerProduct: 0.4,
      volumePerMinute: 10,
    },
    {
      id: 1,
      name: "Station #1",
      pricePerProduct: 0.4,
      volumePerMinute: 10,
    },
  ]);

  const onStationValueChange = (val) => {
    setSliderVal(val);
  };

  return (
    <div className={classes.root}>
      <div>
        <Typography></Typography>
      </div>

      <div>
        <Station
          id={"#1"}
          name={"Station #1"}
          shouldDisplayArrows={true}
          onStationValueChange={onStationValueChange}
          sliderVal={sliderVal}
        />
      </div>

      {allStations.map((square, index) => (
        <div key={index} className={classes.VantiNonVantiSection}>
          <VantiSquare
            shouldDisplayArrow={index !== 0}
            index={index}
            sliderVal={sliderVal}
            onStationValueChange={onStationValueChange}
          />
          <NonVantiSquare shouldDisplayArrow={index !== 0} index={index} />
        </div>
      ))}
    </div>
  );
};
export default PlaygroundContainer;
