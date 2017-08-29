import React from 'react';
import { Link } from 'react-router-dom';

import translator from '../utils/I18N';
import paths from '../paths';

const About = () => (
  <div>
    <Link to={paths.basePath}>{translator.translate('app.back')}</Link>
    <p>{ translator.translate('app.aboutParagraph') }</p>
  </div>
);

export default About;
