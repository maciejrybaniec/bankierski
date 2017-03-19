/* @flow */
/**
 * Application store.
 * @module Store
 */

import {
  applyMiddleware,
  createStore,
  combineReducers
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import ApolloClient from 'Middleware/apollo';

let reduxStore = null;

const configureStore = (initialState: Object) => {
  let store;
  if (!process.browser || !reduxStore) {
    store = createStore(
      combineReducers({
        apollo: ApolloClient.reducer(),
      }),
      initialState,
      composeWithDevTools(applyMiddleware(
        ApolloClient.middleware()
      )),
    );

    if (!process.browser) {
      return store;
    }
    reduxStore = store;
  }

  return reduxStore;
};

export default configureStore;
