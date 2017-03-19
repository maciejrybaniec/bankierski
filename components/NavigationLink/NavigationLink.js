/* @flow */
/**
 * NavigationLink component.
 * @module Components/NavigationLink
 */

import React from 'react';

import colors from 'Styles/colors';
import breakpoints from 'Styles/breakpoints';

import { Link, Router } from '../../routes';

type PropsType = {
  name: string,
  url: string,
};

/**
 * Navigation link component.
 * @constructor
 * @returns {ReactElement}
 */
const NavigationLink = (props: PropsType): React.Element<*> => {
  const { name, url } = props;
  return (
    <li className="navigation-link">
      <style jsx>{`
        .navigation-link {
          margin-top: 15px;
        }

        .navigation-link a {
          color: ${colors.white};
          text-transform: uppercase;

          transition: color .2s linear;
        }

        .navigation-link a:hover {
          color: ${colors.whiteSubtone};
        }

        @media (min-width: ${breakpoints.small}) {
          .navigation-link {
            margin-top: 0;
            padding: 0 15px;
            flex-shrink: 0;
          }

          .navigation-link:last-of-type {
            padding-right: 0;
          }
        }
      `}</style>
      <Link route={url}>
        <a title={name}>{name}</a>
      </Link>
    </li>
  );
}

export default NavigationLink;
