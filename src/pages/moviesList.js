import { GET_MOVIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import MovieCard from "../components/movieCard";
import { Grid, Box, CircularProgress } from "@mui/material";

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading)
    return (
      <Box sx={{ display: "flex", my: 6 }}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Box sx={{ display: "flex", my: 6 }}> `Error! ${error.message}` </Box>
    );
  console.log(data);
  return data.movies.map((movie, index) => (
    <Grid item key={index}>
      <MovieCard movieData={movie} />
    </Grid>
  ));
};

export default Movies;
