const {
  QueryRenderer,
  graphql,
} = require('react-relay');

import environment from './relayEnv';

<QueryRenderer
  environment={environment}
  query={qraphql`
    query Cities {
      City {
        id
        lat
        lng
      }
    }
  `}
   render={
     ({error, props}) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <div>{props.City.id}</div>;
      }
      return <div>Loading</div>;
      }
   }
/>
