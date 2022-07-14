const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/gql-ninja');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use(cors()); // allow cross origin request
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('now listening for request on port ' + 'http://localhost:4000');
})