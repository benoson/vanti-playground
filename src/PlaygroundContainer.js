import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Station from "./Station";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 30,
  },
  stationsSection: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: 30,
  },
});

const PlaygroundContainer = () => {
  const classes = useStyles();

  const [allStations, setNewStation] = useState([
    {
      id: 0,
      name: "My First Station",
      pricePerProduct: 0.4,
      volumePerMinute: 10,
    },
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
          <Station
            name={station.name}
            pricePerProduct={station.pricePerProduct}
            volumePerMinute={station.volumePerMinute}
            shouldDisplayProdLine={station.id !== 0}
          />
        ))}
      </div>

      <Button variant="outlined" onClick={onStationClick}>
        +
      </Button>
    </div>
  );
};

export default PlaygroundContainer;
