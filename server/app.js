const express = require('express');

// https://stackoverflow.com/questions/62760975/graphqlhttp-is-not-a-function
const { graphqlHTTP } = require('express-graphql');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
