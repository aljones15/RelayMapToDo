const {Environment, Network} = require('relay-runtime');
require('es6-promise').polyfill();
require('isomorphic-fetch');

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables
) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  })
}

const network = Network.create(fetchQuery);

export default network;
