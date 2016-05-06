import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute, withRouter} from 'react-router';
import auth from './auth';
import ajaxHelpersAuth from '../utils/ajaxHelpersAuth';
import {Navbar, NavItem} from 'react-materialize';

const Nav = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      error: false,
      successMsg: ''
    };
  },

  handleLogin() {
    var callbackAfterLogin = function(success) {
      if (!success) {
        console.log('There was an error');
        return this.setState({ error: true });
      } else {
        //successfully logged in
        this.setState({successMsg: 'Successfully logged in'});

        const location = this.props.location;
        if (location.state && location.state.nextPathname) {
          this.props.history.push(location.state.nextPathname);
        } else {
          this.props.history.push('/');
        }
      }
    }.bind(this);

    auth.login(this.state.email, this.state.password, callbackAfterLogin);
  },

  handleLogout() {
    var callbackAfterLogout = function(success) {
      if (success) {
        this.setState({successMsg: 'You have successfully logged out'});
      }
    }.bind(this);

    auth.logout(callbackAfterLogout);
  },

  render: function() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div className='cssmenu'>

          <div className='menu'>
<ul>
                   <li><Link to="/About"><span>About</span></Link></li>
                 <li className='last'><a href='mailto:hiddenagendawdi@yahoo.com'><span>Contact us</span></a></li>
                   <li><Link to="/Signup"><span>Signup</span></Link></li>
                   <li><Link to="/SaveAgenda"><span>Save Agenda</span></Link></li>
                   <li>
                     <div className='useridinput'>
                       <button onClick={ () => this.handleLogout() }>Logout</button>
                      </div>
                    </li>
    </ul>
            </div>
        </div>
      )
    }

    return(
      <div className='cssmenu'>
        <h1>Hidden Agenda</h1>
        <div className='menu'>
          <ul>
             <li><Link to="/About"><span>About</span></Link></li>
             <li className='last'><a href='mailto:hiddenagendawdi@yahoo.com'><span>Contact us</span></a></li>
             <li><Link to="/Signup"><span>Signup</span></Link></li>
               <li>
                 <div className='useridinput'>
                  <input placeholder='email' name='email' onChange={ e => this.setState({email: e.target.value})}/>
                  <input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value})}/>
                  <button onClick={ () => this.handleLogin() }>Submit</button>
                </div>
              </li>
          </ul>
        </div>
      </div>
    );
  }
})

export default Nav;
