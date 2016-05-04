import axios from 'axios';

const ajaxHelpers = {
  getResults: function(){
    return axios.get('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=021e9c0509d04ce2b687da4affd991d6&sort=interestingness-desc&group_id=41425956%40N00&tags=barcelona/');

  },
}

export default ajaxHelpers;
