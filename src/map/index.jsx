import React from 'react';
import MapContainer from './style';
import GoogleMapReact from 'google-map-react';
import {City} from '../city/index.jsx';
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
         <QueryRenderer
           environment={environment}
           query={graphql`
             query mapQuery {
               cities { 
                 _id
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
                 return(
                   <GoogleMapReact 
                    bootstrapURLKeys={{key: 'AIzaSyAeni6Tcs8a2dGVEHBBDXqZRZhb1GvfsmA'}}
       defaultCenter={this.props.center} 
       defaultZoom={this.props.zoom} >
                   {
                   props.cities.map((item) =>
                     <City 
                       key={item.lat + item.lng} 
                       lat={item.lat} lng={item.lng}
                       city_id={item._id}
                     >
                     </City>)
                   }
                   </GoogleMapReact>
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
