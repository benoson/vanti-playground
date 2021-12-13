import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Station from "./Station";
import { Button } from "@mui/material";
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
      <div>
        <Station
          id={"#1"}
          name={"Station #1"}
          // pricePerProduct={station.pricePerProduct}
          // volumePerMinute={station.volumePerMinute}
          // shouldDisplayProdLine={station.id !== 0}
          shouldDisplayArrows={true}
        />
      </div>

      {allStations.map((square, index) => (
        // <Station
        //   key={station.id}
        //   id={station.id}
        //   name={station.name}
        //   pricePerProduct={station.pricePerProduct}
        //   volumePerMinute={station.volumePerMinute}
        //   shouldDisplayProdLine={station.id !== 0}
        //   shouldDisplayArrows={station.id === 0}
        // />

        <div key={index} className={classes.VantiNonVantiSection}>
          <VantiSquare shouldDisplayArrow={index !== 0} index={index} />
          <NonVantiSquare shouldDisplayArrow={index !== 0} index={index} />
        </div>
      ))}

      {/* <Button
          variant="outlined"
          className={classes.button}
          onClick={onStationClick}
        >
          +
        </Button> */}
    </div>
  );
};

export default PlaygroundContainer;
