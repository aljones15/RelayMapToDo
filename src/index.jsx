import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map/index.jsx';
import Relay, {createFragmentContainer, graphql} from 'react-relay';
import CityRoute from './routes/cities';

var MapFrag = createFragmentContainer(
  Map,
  {
    fragments: {
      cities: () => Relay.QL`
        fragment on City {
          id,
          lat,
          lng
        }
      `,
    }
  }
);


ReactDOM.render(
  <Relay.Renderer
    environment={Relay.Store}
    Container={MapFrag}
    queryConfig={CityRoute}
  />,
  document.getElementById('app')
);
