import React from 'react';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export class MapBox extends React.Component {
 constructor(props) {
   super(props);
   this.state = {

   };
 }
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGltaW5hbDE4IiwiYSI6ImNqYzhiZm95dDA0NDkzM2xndjVwd2o5c20ifQ.ECbY-ZvwX_SAwhSxSN2IHQ';
   var map = new mapboxgl.Map({
     container: 'map_box',
     style: 'mapbox://styles/mapbox/streets-v10'
   });
  }
  render() {
    return(<div id='map_box' />);
  }
}

export default MapBox
