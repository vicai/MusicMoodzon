import Immutable from 'immutable';

import ActionTypes from './constants/ActionTypes';

export const emojiSelector = state => state.get('emojis');
export const moodSelector = state => state.get('mood');
export const screenshotSelector = state => state.get('screenshot');

const defaultState = Immutable.Map({
  emojis: Immutable.List(),
  mood: null,
  screenshot: null,
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.ADD_SCREENSHOT: {
      return state.set('screenshot', action.screenshot);
    }
  
    case ActionTypes.SET_EMOJIS: {
      return state.set('emojis', action.emojis);
    }
    
    case ActionTypes.SET_MOOD: {
      return state.set('mood', action.mood);
    }
    
    default:
      return state;
  }
}