/* @flow */
/**
 * About us page.
 * @module Pages/AboutUsPage
 */

import React from 'react';

import Layout from 'Components/Layout';

/**
 * About us page component.
 * @constructor
 * @returns {ReactElement}
 */
const AboutUsPage = (): React.Element<*> => {
  return (
    <Layout>
      <div className="about-us-page">
        About us Page
      </div>
    </Layout>
  );
};

export default AboutUsPage;
