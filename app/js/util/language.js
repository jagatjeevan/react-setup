import Cookie from 'js-cookie';

export function setLanguage(lang) {
  Cookie.set('lang', lang);
}

export function getLanguage() {
  if(!Cookie.get('lang') || Cookie.get('lang') === '')
    setLanguage('en');
  return Cookie.get('lang');
}
