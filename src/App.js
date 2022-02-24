import "./App.css";
import Movies from "./pages/moviesList";
import Actors from "./pages/actorsList";
import { Box, Grid } from "@mui/material";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        sx={{ my: 6 }}
      >
        <Outlet />
      </Grid>
    </>
  );
}

export default App;
