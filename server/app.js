const express = require('express');

// https://stackoverflow.com/questions/62760975/graphqlhttp-is-not-a-function
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  // the line below will not be pushed to the GitHub repo because it contains
  // login credentials for accessing the cloud database at: https://cloud.mongodb.com
  // This is it's format...note the comma after the string:
  // 'connection-string-starting-with-mongodb+srv-would-go-here',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
mongoose.connection.once('open', () => {
  console.log('connected to database');
})
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema, // ES6 shortening of "schema: schema"
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
