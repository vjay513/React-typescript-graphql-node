import {
  buildSchema,
  graphql,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { Pool, Subscriptions } from "../sampledata";

const SubscriptionType = new GraphQLObjectType({
  name: "Subscription",
  fields: () => ({
    id: { type: GraphQLID },
    provider: { type: GraphQLString },
    due: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});

const PoolType = new GraphQLObjectType({
  name: "Pool",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    subscription: {
      type: SubscriptionType,
      resolve(parent, args) {
        return Subscriptions.find((p) => p.id === parent.subscriptionID);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    pools: {
      type: new GraphQLList(PoolType),
      resolve(parent, args) {
        return Pool;
      },
    },
    pool: {
      type: PoolType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Pool.find((p) => p.id === args.id);
      },
    },
    subscription: {
      type: SubscriptionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Subscriptions.find((data: any) => data.id === args.id);
      },
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      resolve(parent, args) {
        return Subscriptions;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
