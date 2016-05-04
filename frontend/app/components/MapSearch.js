import React from 'react';

const MapBtn = React.createClass({
  render:function(){
    return(
    <div>
      <button onChange={this.props.Pics}>Search pics from here</button>
    </div>
    )
  }
})
