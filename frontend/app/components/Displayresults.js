import React from 'react';
import {Link} from 'react-router';

function DisplayResults(props){
  const TravelPics = props.photos.map((photos) => {
    return<div key={photos.id} className='photo'>
        <img src={"https://farm" + photos.farm + ".staticflickr.com/" + photos.server + "/" + photos.id + "_" + photos.secret + ".jpg"} />
    </div>
    });
    //https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg
    return (
      <div>
        {TravelPics}
      </div>
    );
  }
export default DisplayResults;
