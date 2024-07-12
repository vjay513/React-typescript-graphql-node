import { gql } from "@apollo/client";

const GET_SUBSCRIPTIONS = gql`
  query getSubscriptions {
    subscriptions {
      id
      provider
      due
      price
    }
  }
`;

export { GET_SUBSCRIPTIONS };
