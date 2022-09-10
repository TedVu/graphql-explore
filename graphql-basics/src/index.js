import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `
    type Query {
      greeting(name: String, position: String): String!
      me: User!
      grades: [Int]!
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
    greeting(parent, args, ctx, info) {
      console.log(args);
      if (args.name && args.position) {
        return `Hello ${args.name}, and ${args.name} is a ${args.position}`;
      }
    },
    grades(parent, args, ctx, info) {
      return [99, 89, 100];
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
