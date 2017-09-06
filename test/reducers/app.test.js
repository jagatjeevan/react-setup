import { expect } from 'chai';

import language from '../../app/js/reducers/app';
import * as types from '../../app/js/utils/actionTypes';

describe('Reducer', () => {
  it('changes the language attribute in the state', () => {
    const lang = 'en';
    const expectedData = { language: lang };
    const expected = language({}, { type: types.LANGUAGE, payload: lang });

    expect(expected).to.deep.equal(expectedData);
  });

  it('removes the language attribute in state if non-supported language is passed', () => {
    const lang = 'fr';
    const expectedData = { imgSrc: '', language: '' };
    const expected = language({}, { type: 'hello', payload: lang });

    expect(expected).to.deep.equal(expectedData);
  });
});
