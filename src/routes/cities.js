import Relay from 'react-relay';

const cityRoute = {
  queries: {
    cities: () => Relay.QL`query { cities }`,
    city: () => Relay.QL`query { city }`
  },
  name: 'CityRoute'
};

export default cityRoute;
