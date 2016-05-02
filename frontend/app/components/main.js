import React from 'react';
import Nav from './Nav';
import LandingPage from './LandingPage';

const Main = React.createClass({
  render: function() {
    return (
      <div>
      <div className="LandingPage">
        <LandingPage />
      </div>
      <div className="main-container">
        <Nav />
        {this.props.children}
      </div>
      </div>
    );
  }
});

export default Main;
