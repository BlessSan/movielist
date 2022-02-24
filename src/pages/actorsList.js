import { GET_ACTORS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Grid, Box, CircularProgress } from "@mui/material";
import ActorCard from "../components/actorCard";

const Actors = () => {
  const { loading, error, data } = useQuery(GET_ACTORS);

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
  console.log(data.actors);
  return data.actors.map((actor, index) => (
    <Grid item key={index}>
      <ActorCard actorData={actor} />
    </Grid>
  ));
};

export default Actors;
