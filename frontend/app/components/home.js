import React from 'react';
import {Link} from 'react-router';
import MapGS from './Map';


// import SearchName from './SearchName';

// import Filters from './Filters';

import axios from 'axios';
import Nav from './Nav';
// require('../utilities/Main.css');

var url = 'http://localhost:3000/';

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

axios.get(url)
.then(function(response){
  console.log("getting searched result", response.data)
  this.setState({
        ajaxReturn: response.data
      });
    }.bind(this))
    .catch(function(err){
      console.log('Error:', err);
      return err;
    })
  },

render: function(){
  return(
    <div>
      <MapGS />
    </div>
    )
  }
});

export default Home;
