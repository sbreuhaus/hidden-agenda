import axios from 'axios';
import ajaxHelpers from '../utils/ajaxHelpers';

module.exports = {
  login(user_id, password, afterLoginFxn) {
    if (this.loggedIn()) {
      if (afterLoginFxn) {
        afterLoginFxn(true);
      }
      return;
    }
    // we are not logged in, make login api call with user_id & passowrd
    axios.post(ajaxHelpers.baseUrl + '/auth/sign_in', {
      user_id: user_id,
      password: password
    })
    .then(function (response) {
      console.log("sign_in:", resonse)
      //localstorage = {}

      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.header['access-token'];
      localStorage.headers.client = response.headers.client;

      if (afterLoginFxn) {
        afterLoginFxn(true)
      }
    })
    .catch(function (response){
      console.log('There was an error:', response);
      if (afterLoginFxn) {
        afterLoginFxn(false);
      }
    });
  },

  signup(user_id, password, password_confirmation, afterSignupFxn) {
    if (this.loggedIn()) {
      //we are already logged in
      if (afterSignupFxn) {
        afterSignupFxn(true)
      }
      return;
    }
    axios.post(ajaxHelpers.baseUrl + '/auth/', {
      user_id: user_id,
      password: password,
      password_confirmation: password
    })
    .then(function (response) {
      console.log(response);
      // we successfully signed up. store the tokens in local storage and run the callback
      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.client;

      if (afterSignupFxn) {
        afterSignupFxn(true)
      }
    })
    .catch(function (response) {
      // we failed to login
      console.log('There was an error:', response.data.errors);
      if (afterSignupFxn) {
        afterSignupFxn(false);
      }
    });
  },
  logout(afterLogoutFxn) {

    // grab the access-token, uid, and client from localstorage
    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    axios.delete(ajaxHelpers.baseUrl + '/auth/sign_out', {
      headers: {
        'uid': uid,
        'access-token': accessToken,
        'client': client
      }
    })
    .then(function (response) {
      console.log(response);
      // we successfully logged out. delete everything from local storage
      delete localStorage.uid
      delete localStorage.accessToken
      delete localStorage.client

      if (afterLogoutFxn) {
        afterLogoutFxn(true)
      }
    })
    .catch(function (response) {
      // we failed to logout
      console.log('There was an error', response);
      if (afterLogoutFxn) {
        afterLogoutFxn(false);
      }
    });
  },

  // for FE to verify you're logged in, just checks to see if tokens exist
  loggedIn() {
    return (!!localStorage.uid && !!localStorage.accessToken && !!localStorage.client);
  },
}
