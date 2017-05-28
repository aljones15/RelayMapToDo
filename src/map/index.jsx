import React from 'react';
import MapContainer from './style';
import GoogleMapReact from 'google-map-react';
import city_item, {City} from '../city/index.jsx';
import Relay, {QueryRenderer, graphql} from 'react-relay';
import environment from '../../Data/relayEnv';

class location {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
};

const changMai = new location(18.7061, 98.9817);
const rangoon = new location(16.8661, 96.1951);
const hanoi = new location(21.0278, 105.8342);
const bigCities = [changMai, rangoon, hanoi];

export class Map extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
     <div id='map'>
       <GoogleMapReact
       bootstrapURLKeys={{key: 'AIzaSyAeni6Tcs8a2dGVEHBBDXqZRZhb1GvfsmA'}}
       defaultCenter={this.props.center} 
       defaultZoom={this.props.zoom} 
       >
         <QueryRenderer
           environment={environment}
           query={graphql`
             query mapQuery {
               cities { 
                 ...city_item
               }
             }
          `}
           render={
             ({error, props}) => {
               if (error) {
                 return <div>{error.message}</div>;
               } else if (props) {
                 console.log(props);
                 return <div>Test City</div>;
               }
                 return <div>Loading</div>;
             }
           }
         />
       </GoogleMapReact>
     </div>
    )
  };
};

Map.defaultProps = { center: {lat: 13.7563, lng: 100.5018}, zoom: 5 };


export default Map;
