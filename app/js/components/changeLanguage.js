// Frameworks
import React from 'react';
import Cookie from 'js-cookie';

function changeLanguage(lang) {
  Cookie.set('lang', lang);
  location.reload();
}

const ChooseLanguage = () => (
  <div className="language-selector">
    <button onClick={() => changeLanguage('en')}>English</button>
    <button onClick={() => changeLanguage('fr')}>Français</button>
  </div>
  );

export default ChooseLanguage;
