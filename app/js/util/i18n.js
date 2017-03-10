import i18next from 'i18next';
import i18nextXhr from 'i18next-xhr-backend';
import i18nextLangDetector from 'i18next-browser-languagedetector';
import config from '../appConfig.js';

class I18nTranslator {
  constructor() {
    this.translator = null;
  }

  initiateTranslator(resolve) {
    return new Promise(() => {
      i18next
        .use(i18nextXhr)
        .use(i18nextLangDetector)
        .init({
          fallbackLng: 'en',
          backend: {
            loadPath: `${config.translationFolder}/{{lng}}/translation.json`,
          },
          detection: {
            order: ['cookie'],
            caches: [],
            lookupCookie: 'lang',
          },
        }, (err, t) => {
          if (err) {
            console.log("something went wrong");
            console.log(err);
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
