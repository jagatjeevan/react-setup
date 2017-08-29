import * as actionTypes from '../utils/actionTypes';

const initialState = {
  language: '',
};

export default function language(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LANGUAGE:
      return Object.assign({}, state, { language: action.payload });
    default:
      return Object.assign({}, state, initialState);
  }
}
