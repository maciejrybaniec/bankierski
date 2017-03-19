/* @flow */
/**
 * Header component.
 * @module Components/Header
 */

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { Link, Router } from '../../routes';

import Container from 'Components/Container';
import Navigation from 'Components/Navigation';
import HamburgerIcon from 'Components/Icons/Hamburger';

import colors from 'Styles/colors';
import breakpoints from 'Styles/breakpoints';

type PropsType = {
  onMenuToggle: () => void,
  menuState: boolean,
};

const enhace = compose(
   withState('menuState', 'setMenuState', false),
   withHandlers({
     onMenuToggle: ({ menuState, setMenuState }) => () => setMenuState(!menuState),
   }),
);

/**
 * Main header component.
 * @constructor
 * @returns {ReactElement}
 */
const Header = ({ onMenuToggle, menuState }: PropsType): React.Element<*> => {
  return (
    <header className="header">
    <style jsx>{`
      .header {
        padding: 10px 0;
        display: flex;
        background-color: ${colors.companyColor};
      }

      .header__content {
        position: relative;
        display: flex;
        flex-direction: column;
      }

      .header__content__logo {
        display: flex;
        align-items: center;
      }

      .header__content__hamburger {
        top: 13px;
        right: 0;
        position: absolute;
        cursor: pointer;
      }

      @media (min-width: ${breakpoints.small}) {
        .header__content {
          flex-direction: row;
        }

        .header__content__hamburger {
          display: none;
        }
      }
    `}</style>
      <Container>
        <div className="header__content">
          <Link route="index">
            <a className="header__content__logo" title="Bankierski.pl - wiarygodna porównywarka">
              <img src="static/img/logo.png" alt="Logo" />
            </a>
          </Link>
          <Navigation collapsed={menuState} />
          <div className="header__content__hamburger" onClick={onMenuToggle}>
            <HamburgerIcon />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default enhace(Header);
