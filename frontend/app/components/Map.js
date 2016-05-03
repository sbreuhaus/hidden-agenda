import React from 'react';

const MapGS = React.createClass({

  render:function(){

    const divStyle = {
      color:'red',
      height:'300px',
      width:'300px',
      background:'blue'
    };
    return(
      <div id='map-div' style={divStyle}>THIS SHOULD BE MAP</div>
    )
  }
})

export default MapGS;
