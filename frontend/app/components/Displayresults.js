import React from 'react';
import {Link} from 'react-router';



const DisplayResults = React.createClass({
  getIntitialState: function(){
    return {
      photo_url: '',
      search_name: '',
      description: ''
    }
  },
  onSavePhoto: function(e){
    console.log('onClick worked');
    console.log(this);

    const agenda = {
      photo_url: this.state.photo_url,
      search_name: this.state.search_name,
      description: this.state.description
    };
    ajaxHelpers.addAgenda(agenda)
    .then(function(response){
      console.log("response",response)
    });
  },

  render: function() {
    const TravelPics = this.props.photos.map((photo) => {
      return<div key={photo.id} className='photo'>
        <img onClick={this.onSavePhoto.bind(this, photo)} src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"} />
      </div>
    });

    return (
      <div>
        {TravelPics}
      </div>
    );
  }
});

export default DisplayResults;
