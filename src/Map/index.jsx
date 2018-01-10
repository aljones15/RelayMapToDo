import React from 'react';
import MapContainer from './style';
import GoogleMapReact from 'google-map-react';
import City from '../City/index.jsx';
import {QueryRenderer, graphql} from 'react-relay';
import environment from '../../data/relayEnv';
import ReactMapGL from 'react-map-gl';

class location {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
};

export class Map extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
     <div id='map'>
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
           render={
             ({error, props}) => {
               if (error) {
                 return <div>{error.message}</div>;
               } else if (props) {
                 return(
 <ReactMapGL
        width={400}
        height={400}
        latitude={37.7577}
        longitude={-122.4376}
        zoom={8}
        onViewportChange={(viewport) => {
          const {width, height, latitude, longitude, zoom} = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
                )
               }
                 return <div>Loading</div>;
             }
           }
         />
     </div>
    )
  };
};

Map.defaultProps = { center: {lat: 13.7563, lng: 100.5018}, zoom: 5 };


export default Map;
