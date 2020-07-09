const graphql = require('graphql');
const_=require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;


// dummy data ... later we'll use MongoDB
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: { // not a function b/c order is not important
    book: {
      type: BookType,
      args: {id: {type: GraphQLString}}, // arguments that are along for the ride when query is made
      resolve(parent, args){
        // code to get data from db / other source ... using lodash
        return _.find(books, {id: args.id});
      }
    }
  }
});

module.export = new GraphQLSchema({
  query: RootQuery
})

// What the query looks like on the front end.
// book(id: '2'){
//   name
//   genre
// }
