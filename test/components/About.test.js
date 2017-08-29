import React from 'react';
import sinon from 'sinon';
import About from '../../app/js/components/About';
import translator from '../../app/js/utils/I18N';

describe('a passing test', () => {
  let sandbox;

  const translation = {
    'app.back': 'Back',
    'app.aboutParagraph': 'Lorem',
  };

  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(translator, 'translate', key => translation[key]);
  });

  after(() => {
    sandbox.restore();
  });

  it('About component with translation', () => {
    const wrapper = shallow(<About />).node;
    expect(wrapper.props.children.length).to.equal(2);

    expect(wrapper.props.children[0].props.to).to.equal('/');
    expect(wrapper.props.children[0].props.children).to.equal(translation['app.back']);

    expect(wrapper.props.children[1].type).to.equal('p');
    expect(wrapper.props.children[1].props.children).to.equal(translation['app.aboutParagraph']);
  });
});
