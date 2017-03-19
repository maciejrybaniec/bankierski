/* @flow */
/**
 * GraphQL wrapper for server side rendering and store hydration.
 * @module Hoc
 */

import 'isomorphic-fetch'
import React, { Component } from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';

import ApolloClient from 'Middleware/apollo';
import createStore from 'Store/createStore';

/**
 * Decorator for components that uses GraphQL store context.
 *
 * Wrap component with <ApolloProvider /> component
 * to propagate context and allow to getDataFromTree.
 *
 * @property {ReactClass} ComputedComponent Class to wrapped by component.
 */
const withApollo = (ComputedComponent: ReactClass<*>): ReactClass<*> => {
  return class WithApolloProvider extends Component {
    store: Object;
    /**
     * Static method invoked before component rendering.
     * @returns {Object} Component properties.
     * @static
     */
    static async getInitialProps() {
      const store = createStore(ApolloClient.initialState);
      const props = { // $FlowFixMe
        ...await (Component.getInitialProps ? Component.getInitialProps() : {})
      };

      if (!process.browser) {
        const app = (
          <ApolloProvider client={ApolloClient} store={store}>
            <ComputedComponent {...props} />
          </ApolloProvider>
        );
        await getDataFromTree(app)
      }

      return {
        initialState: {
          ...store.getState(),
          apollo: {
            data: ApolloClient.getInitialState().data
          }
        },
        ...props
      };
    }

    constructor(props: Object) {
      super(props);
      this.store = createStore(this.props.initialState);
    }
    /**
     * Render component in DOM.
     * @returns {ReactElement} React element.
     */
    render(): React.Element<*> {
      return (
        <ApolloProvider client={ApolloClient} store={this.store}>
          <ComputedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  }
};

export default withApollo;
