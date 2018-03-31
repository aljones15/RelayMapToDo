import React from 'react';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const markerLayer = 'markerLayer';

export class MapBox extends React.Component {
  mapGl;
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {
    console.log('comp did update');
    this.removeMarkers();
    this.addMarkers(this.props.markers);
  }
  componentDidMount() {
    mapboxgl.accessToken = process.env.MapboxAccessToken;
    this.initMap();
    this.mapGL.on('style.load', () => this.addMarkers(this.props.markers));
  }
  /**
   * initMap - inits the map box map
   */
  initMap = () => {
    this.mapGL = new mapboxgl.Map({
      container: 'map_box',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-74.5, 40],
      zoom: 9,
    });
    this.mapGL.doubleClickZoom.disable();
  };
  /**
   * removes all the markers from the map
   */
  removeMarkers = () => {
    this.mapGL.removeLayer(markerLayer);
  };
  mapClick = ({ point }) => {
    console.log(point);
    const options = { layers: [markerLayer] };
    const offset = 15;
    const near = [
      [point.x - offset, point.y - offset],
      [point.x + offset, point.y + offset],
    ];
    const features = this.mapGL.queryRenderedFeatures(near, options);
  };
  /**
   * adds the markers layer to the map
   */
  addMarkers = markers => {
    const layer = {
      id: markerLayer,
      interactive: true,
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: markers,
        },
      },
      layout: {
        'icon-image': '{icon}-15',
        'text-field': '{title}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.6],
        'text-anchor': 'top',
      },
    };
    this.mapGL.addLayer(layer);
    this.mapGL.on('click', this.mapClick);
  };
  render() {
    const style = { width: '100%', height: '100%' };
    return <div id="map_box" style={style} />;
  }
}

export default MapBox;
