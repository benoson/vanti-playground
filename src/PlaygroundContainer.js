import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Station from "./Station";
import { Button } from "@mui/material";
import ProductionLine from "./ProductionLine";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 30,
  },
  stationsSection: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 30,
  },
  stationProductionLine: {
    display: "flex",
    alignItems: "center",
  },
});

const PlaygroundContainer = () => {
  const classes = useStyles();

  const [allStations, setNewStation] = useState([
    { name: "My First Station", pricePerProduct: 0.4, volumePerMinute: 10 },
  ]);

  const onStationClick = () => {
    const allStationsNew = [...allStations];
    allStationsNew.push({
      name: `Station #${allStations.length + 1}`,
      pricePerProduct: 0,
      volumePerMinute: 0,
    });
    setNewStation(allStationsNew);
  };

  return (
    <div className={classes.root}>
      <div className={classes.stationsSection}>
        {allStations.map((station) => (
          <div className={classes.stationProductionLine}>
            <Station
              name={station.name}
              pricePerProduct={station.pricePerProduct}
              volumePerMinute={station.volumePerMinute}
            />
            <ProductionLine />
          </div>
        ))}
      </div>

      <Button variant="outlined" onClick={onStationClick}>
        +
      </Button>
    </div>
  );
};

export default PlaygroundContainer;
