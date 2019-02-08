import i18next from 'i18next';
import i18nextXhr from 'i18next-xhr-backend';
import i18nextLangDetector from 'i18next-browser-languagedetector';
import Cookie from 'js-cookie';
import paths from '../paths';

const supportedlanguages = [
  'en',
  'fr',
];

const TranslationKey = {
  search: 'cookie',
  lookUpKey: 'i18nextLng',
};

class I18nTranslator {
  constructor() {
    this.translator = null;
  }

  initiateTranslator(resolve) {
    return new Promise(() => {
      let langToDisplay;
      if (!Cookie.get(TranslationKey.lookUpKey)) { [langToDisplay] = supportedlanguages; }
      langToDisplay = (supportedlanguages.filter(lang => lang === Cookie.get(TranslationKey.lookUpKey)).length > 0) ? Cookie.get(TranslationKey.lookUpKey) : supportedlanguages[0];
      i18next
        .use(i18nextXhr)
        .use(i18nextLangDetector)
        .init({
          fallbackLng: supportedlanguages[0],
          backend: {
            loadPath: `${paths.translationFolder}/${langToDisplay}/translation.json`,
          },
          detection: {
            order: [TranslationKey.search],
            caches: [],
            lookupCookie: TranslationKey.lookUpKey,
          },
        }, (err, t) => {
          if (err) {
            /* eslint no-console: 0 */
            console.log('something went wrong in loading translations', err);
          } else {
            this.translator = t;
            resolve();
          }
        });
    });
  }

  translate(key) {
    if (!this.translator) {
      throw new Error('Translator not initialized');
    }
    return this.translator(key);
  }
}

const translatorInstance = new I18nTranslator();

export default translatorInstance;
