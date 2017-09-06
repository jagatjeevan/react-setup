import * as actionTypes from '../utils/actionTypes';

export function changeLanguage(lang) {
  return {
    type: actionTypes.LANGUAGE,
    payload: lang,
  };
}

export function changeImage(imgSrc) {
  return {
    type: actionTypes.IMAGE_SOURCE,
    payload: imgSrc,
  };
}
