import { GET_MOVIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import MovieCard from "../components/movieCard";
import { Grid } from "@mui/material";

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return data.movies.map((movie, index) => (
    <Grid item key={index}>
      <MovieCard movieData={movie} />
    </Grid>
  ));
};

export default Movies;
