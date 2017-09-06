import * as actionTypes from '../utils/actionTypes';

const initialState = {
  language: '',
  imgSrc: '',
};

export default function language(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LANGUAGE:
      return Object.assign({}, state, { language: action.payload });

    case actionTypes.IMAGE_SOURCE:
      return Object.assign({}, state, { imgSrc: action.payload });

    default:
      return Object.assign({}, state, initialState);
  }
}
