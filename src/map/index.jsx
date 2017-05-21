import React from 'react';
import MapContainer from './style';
import GoogleMapReact from 'google-map-react';
import City from '../city/index.jsx';

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

class Map extends React.Component {
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
         {bigCities.map((city, index) => { return(<City key={index + '_' + city.lat + '_' + city.lng} lat={city.lat} lng={city.lng} />);})}
       </GoogleMapReact>
     </div>
    )
  };
};

Map.defaultProps = { center: {lat: 13.7563, lng: 100.5018}, zoom: 7 };

export default Map;
