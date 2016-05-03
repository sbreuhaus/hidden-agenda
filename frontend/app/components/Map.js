import React from 'react';
import APIk from '../utils/key';

const MapGS = React.createClass({

  handleMapDisplay(){
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log("user latitude" + position.coords.latitude);
    console.log("user longitude" + position.coords.longitude);
    let userLat = position.coords.latitude;
    let userLong = position.coords.longitude;
    L.mapbox.accessToken = APIk.mapBox;
    Window.map = L.mapbox.map('map', 'mapbox.streets').setView(([userLat, userLong]||[40.7527, -73.9772]), 13);
    L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [
        userLong,
        userLat
      ]
    },
    properties: {
      title: 'You are here',
      'marker-size': 'large',
      'marker-color': '#f86767',
      'marker-symbol': 'star'
    }
    }).addTo(Window.map);


    })
    },
    render: function() {

    const mapStyle = {
      width: '100vw',
      height: '65vw',
      zIndex: '-3000',
      position: 'fixed',
      border: "0",
      padding: "0"
    }

    // const coordStyle = {
    //   position:'absolute',
    //   bottom:'10px',
    //   left:'10px',
    //   padding:'5px 10px',
    //   background:'rgba(0,0,0,0.5)',
    //   color:'#fff',
    //   fontSize:'11px',
    //   lineHeight:'18px',
    //   borderRadius:'3px'
    // };

    return(


        <div id='map' style={mapStyle}>
          {this.handleMapDisplay()}
        </div>

    )
  }
})

export default MapGS;
