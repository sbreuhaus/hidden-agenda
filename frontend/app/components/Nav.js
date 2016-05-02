import React from 'react';
import {Link} from 'react-router';
import Signup from './Signup';
import About from './About';



const Nav = React.createClass({
  render: function(){
    return(
      <div className='cssmenu'>
        <h1>Hidden Agenda</h1>
        <ul>
         <Link to="/About"><li><span>About</span></li></Link>
         <Link to="/SignUp"><li><span>Sign up</span></li></Link>
         <li className='last'><a href='mailto:hiddenagendawdi@yahoo.com'><span>Contact us</span></a></li>
         <li>
           <div>
              <input placeholder='user id' name='user id' onChange={ e => this.setState({user_id: e.target.value})}/>
              <input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value})}/>
              <button onClink={ () => this.handleLog() }>Submit</button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
});

export default Nav;
