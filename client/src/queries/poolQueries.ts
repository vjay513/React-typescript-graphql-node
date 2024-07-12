import { gql } from "@apollo/client";

const GET_POOLS = gql`
  query getPools {
    pools {
      id
      name
      status
    }
  }
`;

const GET_POOL = gql`
  query getpool($id: ID!) {
    pool(id: $id) {
      id
      name
      description
      status
      subscription {
        id
        provider
        due
        price
      }
    }
  }
`;

export { GET_POOLS, GET_POOL };
