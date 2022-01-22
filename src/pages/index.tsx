import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "components/List/List";
import Map from "components/Map/Map";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    console.log("first");
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <Box style={{ marginTop: "1rem" }}>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} coordinates={coordinates} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
