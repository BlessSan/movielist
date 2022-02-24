import { GET_ACTORS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import ActorCard from "../components/actorCard";

const Actors = () => {
  const { loading, error, data } = useQuery(GET_ACTORS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data.actors);
  return data.actors.map((actor, index) => (
    <Grid item key={index}>
      <ActorCard actorData={actor} />
    </Grid>
  ));
};

export default Actors;
