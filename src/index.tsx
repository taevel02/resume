import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './pages/App';

import '@fortawesome/fontawesome-free/js/all.min';
import './scss/reset.scss';
import './scss/global.scss';

ReactDom.render(<App />, document.getElementById('app'));
