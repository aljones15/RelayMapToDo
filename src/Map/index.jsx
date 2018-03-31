import React from 'react';
import MapContainer from './style';
import GoogleMapReact from 'google-map-react';
import City from '../City/index.jsx';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../data/relayEnv';
import MapBox from '../MapBox/index.jsx';

class location {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}

export class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="map">
        <QueryRenderer
          environment={environment}
          query={graphql`
            query MapQuery {
              cities {
                lat
                lng
                ...City_item
              }
            }
          `}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              const markers = [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-77.03238901390978, 38.913188059745586],
                  },
                  properties: {
                    title: 'Mapbox DC',
                    icon: 'star',
                  },
                },
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-122.414, 37.776],
                  },
                  properties: {
                    title: 'Mapbox SF',
                    icon: 'star',
                  },
                },
              ];
              return <MapBox markers={markers} />;
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

Map.defaultProps = { center: { lat: 13.7563, lng: 100.5018 }, zoom: 5 };

export default Map;
