import React from 'react';
import { render } from 'react-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.compat.css';

import history from './utils/history';
import store from './store/store';

import Root from './components/Environment/Root';

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
