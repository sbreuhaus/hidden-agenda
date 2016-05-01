import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
  render:function(){
    return(
      <div>
        <h1>HIDDEN AGENDA!</h1>
          function initMap() {
            var mapDiv = document.getElementById('map');
            var map = new google.maps.Map(mapDiv, {
              center: {lat: 40.730610, lng: -73.935242},
              zoom: 12
    });
  }
      </div>
    )
  }
})

export default Home;
