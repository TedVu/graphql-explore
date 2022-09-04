import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
    }
`;

// Resolvers what would be returned when hitting a particular query
const resolvers = {
  Query: {
    hello() {
      return "Hello World!";
    },
    name() {
      return "My name is Ted";
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => {
  console.log("The server is up");
});
