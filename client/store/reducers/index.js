import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import topics from './topics';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  user,
  topics,
});

export default createRootReducer;
