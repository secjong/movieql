import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

// graphql 서버는 resolver 에 정의된 query 나 mutation 을 실행시킨다.
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => {
    console.log("서버시작!");
}); 