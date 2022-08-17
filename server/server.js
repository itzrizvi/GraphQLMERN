// ALL REQUIRES
const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000; // PORT
const connectDB = require('./config/db');



// CREATING APP
const app = express();

// CONNECT TO DB
connectDB();

//
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

// SERVER LISTENING
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${port}`);
})
