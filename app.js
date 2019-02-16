const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const db = require('./db');
const graphql = require('./graphql');
const users = require('./routes/users');

const port = process.env.PORT || 3000;
const app = express();

db.connect('mongodb');
graphql.applyMiddleware({ app });

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);

console.log('Server listening at port: ' + port);
console.log('GraphQL: ' + graphql.graphqlPath);
module.exports = app;