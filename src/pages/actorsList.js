import { GET_ACTORS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const Actors = () => {
  const { loading, error, data } = useQuery(GET_ACTORS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data.actors);
  return data.actors.map((actor, index) => <div key={index}>{actor.name}</div>);
};

export default Actors;
