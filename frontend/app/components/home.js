import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import MapGS from './Map';
// import SearchName from './SearchName';

// import Filters from './Filters';

import axios from 'axios';
import DisplayResults from './DisplayResults';
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


componentDidMount: function() {
  ajaxHelpers.getResults().then(function(response){
    console.log(response);
    this.setState({
      ajaxReturn: response.data.photos.photo
    });
  }.bind(this));
},

render: function(){
  return(
    <div>
      <DisplayResults photos={this.state.ajaxReturn} />
      <MapGS />
    </div>
    )
  }
});

export default Home;
