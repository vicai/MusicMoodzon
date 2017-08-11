import axios from 'axios';
import Immutable from 'immutable';
import Promise from 'bluebird';

export default class MusicMoodzonAPIUtils {
  static sendImg(imagesrc) {
    return Promise.resolve(axios({
      method: 'POST',
      url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
      headers: {'Content-Type': 'application/octet-stream','Accept':'text/html,application/xhtml+xml,application/xml','Ocp-Apim-Subscription-Key':'ac42a8d3b6d34345931c3ac02c5be878'},
      data: btoa(imagesrc),
    }).then(response => {
      return Immutable.fromJS(response).getIn(['data', 'access_token']);
    }));
  }
}