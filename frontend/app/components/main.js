import React from 'react';
import Nav from './Nav';

const Main = React.createClass({
  render: function() {
    return (
      <div>
      <div className="main-container">
        <Nav />
        {this.props.children}
      </div>

      </div>
    );
  }
});

export default Main;
