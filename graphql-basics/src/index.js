import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `
    type Query {
      greeting(name: String): String!
      me: User!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }
`;

// Resolvers what would be returned when hitting a particular query
const resolvers = {
  Query: {
    greeting(parentt, args, ctx, info) {
      console.log(args);

      return "Hello";
    },
    me() {
      return {
        id: "12398",
        name: "Ted Vu",
        email: "tedvu184@gmail.com",
        age: 24,
      };
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => {
  console.log("The server is up on port 4000");
});
