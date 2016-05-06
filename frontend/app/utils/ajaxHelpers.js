import axios from 'axios';

const ajaxHelpers = {
  getResults: function(cityName){
    return axios.get('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=021e9c0509d04ce2b687da4affd991d6&sort=interestingness-desc&group_id=41425956%40N00&tags=' + cityName + '/');
  },

  getMapResults: function(){
    return axios.get('https://api.flickr.com/services/rest/?method=flickr.places.findByLatLon&api_key=98fb0f1ac7a877fa9e393a791a52f270&lat=40.7527&lon=-73.9772&format=json&nojsoncallback=1&api_sig=9a9c7745402ad944a8f825faa7e78080');
  },

  addAgenda: function(photo){
    return axios.post('http://localhost:3000/photos', photo);
  },

}





export default ajaxHelpers;
