import { GET_MOVIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import MovieCard from "../components/movieCard";

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return data.movies.map((movie, index) => <MovieCard name={movie.name} />);
};

export default Movies;
