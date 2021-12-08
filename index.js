const { ApolloServer, gql } = require("apollo-server");
const { animals, mainCards, categories } = require("./db");
const typeDefs = require("./schema/schema");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Animal,
    Category,
     
  },
  context: {
    mainCards,
    animals,
    categories
  }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
