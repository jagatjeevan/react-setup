import * as actionTypes from '../utils/actionTypes';

export function changeLanguage(lang) {
  return {
    type: actionTypes.LANGUAGE,
    payload: lang,
  };
}
