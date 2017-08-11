import Immutable from 'immutable';

import ActionTypes from './constants/ActionTypes';

export const columnsSelector = state => state.get('columns');

const defaultState = Immutable.Map({
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}