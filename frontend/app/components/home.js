import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import Map from './Map';
// import SearchName from './SearchName';

// import Filters from './Filters';

import axios from 'axios';
import DisplayResults from './DisplayResults';
import SearchName from './Search';
// require('../utilities/Main.css');

// var flickurl = 'https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=021e9c0509d04ce2b687da4affd991d6&sort=interestingness-desc&group_id=41425956%40N00&tags=barcelona/';

const Home = React.createClass({


  clickConfirm: function(){
    console.log('this worked!')
  },

  getIntitialState: function() {
    return{
      ajaxReturn: [],
      searchName: ''
    };
  },

  onChangeName: function(e) {
    console.log('Searching!');
    this.setState({
      searchName: e.target.value
    })
  },

  onSubmit: function() {
  console.log("onSubmit was called!");


  var travelSearch = {};
  if (this.state.searchName) {
    travelSearch.name = this.state.searchName;
  }
},

handleGeoReverse: function(){
  // runs after ui renders
  axios.get('http://api.tiles.mapbox.com/v3/{mapbox.streets}/geocode/' + marker.getLatLng() + '.json')
  .then(function(response){
    console.log("Did Mount", response);
    console.log(this);
  }.bind(this))
  .catch(function(err){
    // good practice to add to promise chains
    console.warn('Error in ');
  })
},

componentDidMount: function() {
  console.log('componentDidMount')
  ajaxHelpers.getResults()
  .then(function(response){
    console.log(response);
    this.setState({
      ajaxReturn: response.data.photos.photo
    });
  }.bind(this));
},

render: function(){
  return(
    <div>
      <Map />
      <SearchName onChangeName={this.onChangeName}
                  onSubmit={this.onSubmit}
        />
      <MapGS />
      <MapBtn Pics={this.handleGeoReverse()}
      <DisplayResults photos={this.state.ajaxReturn} />
    </div>
    )
  }
});

export default Home;
