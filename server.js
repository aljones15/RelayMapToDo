import chokidar from 'chokidar';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { clean } from 'require-clean';
import { exec } from 'child_process';

const APP_PORT = 3000;
const GRAPHQL_PORT = 4756;

let graphQLServer;
let appServer;

function startAppServer(callback) {
  // Serve the Relay app
  const compiler = webpack({
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.(js|jsx)?$/,
        },
      ],
      rules: [
        {
          test: /\.jsx$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {},
          },
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        MapboxAccessToken:
          'pk.eyJ1IjoibGltaW5hbDE4IiwiYSI6ImNqYzhiZm95dDA0NDkzM2xndjVwd2o5c20ifQ.ECbY-ZvwX_SAwhSxSN2IHQ',
      }),
    ],
    output: { filename: './index.js', path: '/', publicPath: '/src/' },
  });
  appServer = new WebpackDevServer(compiler, {
    contentBase: '/public',
    proxy: { '/graphql': `http://localhost:${GRAPHQL_PORT}` },
    publicPath: '/src/',
    stats: { colors: true },
  });
  // Serve static resources
  appServer.use('/', express.static(path.resolve(__dirname, 'public')));
  appServer.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
    if (callback) {
      callback();
    }
  });
}

function startGraphQLServer(callback) {
  // Expose a GraphQL endpoint
  clean('./data/schema');
  const { Schema } = require('./data/schema');
  const graphQLApp = express();
  graphQLApp.use(
    '/',
    graphQLHTTP({
      graphiql: true,
      pretty: true,
      schema: Schema,
    })
  );
  graphQLServer = graphQLApp.listen(GRAPHQL_PORT, () => {
    console.log(
      `GraphQL server is now running on http://localhost:${GRAPHQL_PORT}`
    );
    if (callback) {
      callback();
    }
  });
}

function startServers(callback) {
  // Shut down the servers
  if (appServer) {
    appServer.listeningApp.close();
  }
  if (graphQLServer) {
    graphQLServer.close();
  }

  // Compile the schema
  exec('npm run update-schema', (error, stdout) => {
    console.log(stdout);
    let doneTasks = 0;
    function handleTaskDone() {
      doneTasks++;
      if (doneTasks === 2 && callback) {
        callback();
      }
    }
    startGraphQLServer(handleTaskDone);
    startAppServer(handleTaskDone);
  });
}

startServers();
