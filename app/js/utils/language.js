import Cookie from 'js-cookie';

export function setLanguage(lang) {
  Cookie.set('i18nextLng', lang);
}

export function getLanguage() {
  if (!Cookie.get('i18nextLng') || Cookie.get('i18nextLng') === '') { setLanguage('en'); }
  return Cookie.get('i18nextLng');
}
