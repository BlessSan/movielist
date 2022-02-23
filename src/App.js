import "./App.css";
import Movies from "./pages/moviesList";
import Actors from "./pages/actorsList";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
    >
      <Movies />
    </Grid>
  );
}

export default App;
