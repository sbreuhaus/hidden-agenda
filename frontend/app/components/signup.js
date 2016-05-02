import React from 'react';
import {Link} from 'react-router';

const Signup = React.createClass({
  render: function(){
    return (
      <div>
        <input placeholder='user id' name='user id' onChange={ e => this.setState({user_id: e.target.value})}/>
        <input placeholder='password' type='password' name='password' onChange={e => this.setState({password: e.target.value})} />
        <input placeholder='password confirmation' type='password' name='passwordConfirm' onChange={ e => this.setState({passwordConfirmation: e.target.value})} />
        <button onClick={ () => this.handleLogin() }>Submit</button>
        <p>Already have an account?<br/><br/>
        <Link to={'/'}>Homepage</Link></p>
      </div>
    );
  }
})

export default Signup;
