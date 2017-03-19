/* @flow */
/**
 * Navigation component.
 * @module Components/Navigation
 */

import React from 'react';
import cx from 'classnames';

import colors from 'Styles/colors';
import breakpoints from 'Styles/breakpoints';

import { Link, Router } from '../../routes';

import NavigationLink from 'Components/NavigationLink';

type PropsType = {
  className?: string,
  collapsed: boolean,
};

const applicationRoutes = [
  { name: 'O nas', url: 'about' },
  { name: 'Pożyczki', url: 'about' },
  { name: 'Kontakt', url: 'contact' },
];

/**
 * Main navigation component.
 * @constructor
 * @param {PropsType} props Component properties.
 * @returns {ReactElement}
 */
const Navigation = (props: PropsType): React.Element<*> => {
  const { className, collapsed } = props;
  return (
    <nav className={cx('navigation', { 'navigation-collapsed': collapsed }, className)}>
      <style jsx>{`
        .navigation {
          display: flex;
          flex-grow: 1;
          max-height: 0;
          overflow: hidden;
        }

        .navigation-collapsed {
          padding-bottom: 10px;
          max-height: none;
        }

        .navigation__list {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center
        }

        @media (min-width: ${breakpoints.small}) {
          .navigation__list {
            flex-direction: row;
            justify-content: flex-end;
          }

          .navigation {
            max-height: none;
          }
        }
      `}</style>
      <ul className="navigation__list">
        {applicationRoutes.map((route) => {
          const { name, url } = route;
          return (
            <NavigationLink key={name} name={name} url={url} />
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
