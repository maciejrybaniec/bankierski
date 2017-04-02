/* @flow */
/**
 * Container component.
 * @module Components/Container
 */

import React from 'react';

import breakpoints from 'Styles/breakpoints';

type PropsType = {
  children?: React.Element<*>,
};

/**
 * Container component.
 * @constructor
 * @returns {ReactElement}
 */
const Container = (props: PropsType): React.Element<*> => {
  const { children } = props;
  return (
    <div className="container">
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 0 15px;
          width: 100%;
          box-sizing: border-box;
        }

        @media (min-width: ${breakpoints.small}) {
          .container {
            width: 750px;
          }
        }

        @media (min-width: ${breakpoints.medium}) {
          .container {
            width: 970px;
          }
        }

        @media (min-width: ${breakpoints.large}) {
          .container {
            width: 1170px;
          }
        }
      `}</style>
      {children}
    </div>
  );
}

export default Container;
