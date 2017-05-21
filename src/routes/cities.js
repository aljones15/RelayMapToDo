import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    cities: () => Relay.QL`query { cities }`,
    city: () => Relay.QL`query { city }`
  };
  static routeName = 'CityRoute';
}
