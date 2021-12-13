import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Station from "./Station";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 30,
  },
  stationsSection: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginRight: 30,
  },
  button: {
    marginLeft: "50px !important",
  },
});

const PlaygroundContainer = () => {
  const classes = useStyles();

  const [allStations, setNewStation] = useState([
    {
      id: 0,
      name: "Station #1",
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
            key={station.id}
            id={station.id}
            name={station.name}
            pricePerProduct={station.pricePerProduct}
            volumePerMinute={station.volumePerMinute}
            shouldDisplayProdLine={station.id !== 0}
          />
        ))}
        <Button
          variant="outlined"
          className={classes.button}
          onClick={onStationClick}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default PlaygroundContainer;
