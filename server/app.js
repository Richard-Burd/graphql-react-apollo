const express = require('express');

// https://stackoverflow.com/questions/62760975/graphqlhttp-is-not-a-function
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to mLab database,
mongoose.connect(
  '<connection string goes here>', // #gitignore
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
