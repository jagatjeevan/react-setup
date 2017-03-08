export function setLanguage(lang) {
  localStorage.setItem('lang', lang);
}

export function getLanguage() {
  if(!localStorage.getItem('lang') || localStorage.getItem('lang') === '')
    setLanguage('en');

  return localStorage.getItem('lang');
}
