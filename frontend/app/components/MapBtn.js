import React from 'react';

const MapBtn = React.createClass({

  handleMapAjax:function(e){
    console.log("Search by map marker!!");
  },

  render:function(){
    return(
      <button onClick={this.handleMapAjax}>Search by Map</button>
    )
  }
})

export default MapBtn;
