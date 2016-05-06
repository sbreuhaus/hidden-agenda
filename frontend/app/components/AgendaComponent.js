import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

const AgendaComponent = React.createClass({
  addAgenda: function(){

    let agenda = {
      photo_url: this.props.photo_url
    }

    ajaxHelpers.addAgenda(agenda)
    .then(function(response){
      console.log('logging response after adding agenda', response.data.ops[0]['id']);
      this.setState({
        id: response.data.ops[0]['id']
      })
      console.log("Mongo ID for song:", this.state.id);
    }.bind(this))
  },

render: function(){

})
