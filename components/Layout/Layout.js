/* @flow */
/**
 * Layout component.
 * @module Components/Layout
 */

import React from 'react';
import Head from 'next/head';

import Header from 'Components/Header';

/**
 * Main layout component.
 * @constructor
 * @returns {ReactElement}
 */
const Layout = (props: Object): React.Element<*> => {
  const { children } = props;
  return (
    <div className="layout">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet" />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
          paddding: 0;
          font-family: 'Montserrat', sans-serif;
        }

        ul, ol {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        a {
          text-decoration: none;
        }
      `}</style>
      <Header />
      <div className="layout__cotent">
        {children}
      </div>
    </div>
  );
}

export default Layout;
