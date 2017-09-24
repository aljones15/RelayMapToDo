'use strict';
import chokidar from 'chokidar';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
const { Schema } = require('../data/schema');

const APP_PORT = 3000;
const server = express();
const dist = path.resolve(__dirname, 'index.html');

server.use('/',express.static('dist'));

server.use('/graphql', graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema: Schema,
}));

server.listen(APP_PORT, () => {
  console.log('App is now running on http://localhost:' + APP_PORT);
});
export default server;
