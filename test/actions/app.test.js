import { expect } from 'chai';

import * as types from '../../app/js/utils/actionTypes';
import { changeLanguage } from '../../app/js/actions/app';

describe('App action', () => {
  it('changes language on the parameter passed', () => {
    const lang = 'en';
    const expectedAction = {
      type: types.LANGUAGE,
      payload: lang,
    };
    expect(changeLanguage(lang)).to.deep.equal(expectedAction);
  })
});
