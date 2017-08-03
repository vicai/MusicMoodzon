import axios from 'axios';
import Immutable from 'immutable';
import Promise from 'bluebird';

export const client_id = '1aaab51e-b8bd-447a-b5e3-f52da99ae897';
export const campaign_id = 'e0cf2d5d-05b7-43d4-9c9c-4f514e5cdd6d';
export const client_secret = 'MG26d5e7sLt5AllWTYpYfGKotvLY1wc1va-O4dmi3sXigqxwKV9vLVRTkKM0RIddFNaSsjIFl7Mup7zvPERfzA';
export const encodedToken = btoa(`${client_id}:${client_secret}`);

export default class FreeBeeAPIUtils {
  static getAccessToken() {
    return Promise.resolve(axios({
      method: 'get',
      url: 'http://localhost:3000/freebee/token',
    }).then(response => {
      return Immutable.fromJS(response).getIn(['data', 'access_token']);
    }));
  }
  
  static checkFreeBeeEligibility(accessToken, phoneNumber) {
    return Promise.resolve(axios({
      withCredentials: true,
      method: 'get',
      url: `http://localhost:3000/freebee/eligibility?phoneNumber=${phoneNumber}&accessToken=${accessToken}`,
    }).then(response => {
      return Immutable.fromJS(response).getIn(['data', 'entity']);
    }).catch(error => {
      console.log('error', error);
    }));
  }
  
  static getFreeBeeData(accessToken, phoneNumber) {
    return Promise.resolve(axios({
      method: 'post',
      url: `https://perks.svcs.verizon.com/mobileperks/redeem/${campaign_id}?mdn=${phoneNumber}`,
      headers: {'Authorization': `Bearer ${accessToken}`}
    }));
  }
}