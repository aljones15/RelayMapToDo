const {
  Environment,
  RecordSource,
  Store,
} = require('relay-runtime');
import network from './network';

const source = new RecordSource();
const store = new Store(source);
const handlerProvider = null;

const environment = new Environment({
  handlerProvider,
  network,
  store,
});

export default environment;
