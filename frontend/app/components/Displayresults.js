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
  onSavePhoto: function(photo){
    console.log('onClick worked');
    console.log(photo);
    ajaxHelpers.addAgenda(agenda)
    .then(function(response){
      console.log("response",response)
    });
  },



  render: function() {
    const TravelPics = this.props.photos.map(function(photo){
          return <div key={photo.id} className='photo'>
              <img onClick={this.onSavePhoto.bind(this, photo)} src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"} />
          </div>
        }.bind(this));

    return (
      <div>
        {TravelPics}
      </div>
    );
  }
});

export default DisplayResults;
