import ActionTypes from './constants/ActionTypes';

export function addScreenshot({ screenshot }) {
  return {
    type: ActionTypes.ADD_SCREENSHOT,
    screenshot,
  }
}

export function setMood({ mood }) {
  return {
    type: ActionTypes.SET_MOOD,
    mood,
  }
}
