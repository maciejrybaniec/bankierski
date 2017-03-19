/* @flow */
/**
 * Application entry point.
 * @module Pages/Index
 */

import React from 'react';
import withApolloProvider from '../hoc/withApolloProvider';

import Layout from 'Components/Layout';
import LoanComparator from 'Components/LoanComparator';

/**
 * Home page component.
 * @constructor
 * @returns {ReactElement}
 */
const HomePage = (): React.Element<*> => {
  return (
    <Layout>
      <div className="home-page">
        <LoanComparator />
      </div>
    </Layout>
  );
};

export default withApolloProvider(HomePage);
