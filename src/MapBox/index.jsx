import React from 'react';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


export class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

     };
  }
  componentDidMount() {
    mapboxgl.accessToken = process.env.MapboxAccessToken;
    const mapGL = new mapboxgl.Map({
      container: 'map_box',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-74.50, 40],
      zoom: 9
    });
  }
  render() {
    const style = {width: '100%', height: '100%'};
    return(<div id='map_box' style={style}></div>);
  }
}

export default MapBox
