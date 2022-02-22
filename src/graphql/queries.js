import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      name
      genre
      actor {
        name
        age
      }
    }
  }
`;

export const GET_ACTORS = gql`
  query getActors {
    actors {
      id
      name
      age
      movies {
        name
        genre
      }
    }
  }
`;
