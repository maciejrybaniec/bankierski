/* @flow */
/**
 * Apollo middleware configuration.
 * @module Middleware/Apollo
 */

import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8081/graphql',
});

export default new ApolloClient({
  networkInterface,
  ssrMode: !process.browser,
  queryTransformer: ApolloClient.addTypename,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    return null;
  }
});
