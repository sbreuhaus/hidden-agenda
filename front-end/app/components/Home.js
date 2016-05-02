import React from 'react';
import Map from './Map';
import {Link} from 'react-router';

const Home = React.createClass({
  render:function(){
    return(
      <div>
        <h1>HIDDEN AGENDA!</h1>
        <Map />
      </div>
    )
  }
})

export default Home;
