/* @flow */
/**
 * Hambuerger icon component.
 * @module Components/Icons/Hamburger
 */

import React from 'react';

/**
 * Navigation link component.
 * @constructor
 * @returns {ReactElement}
 */
const HamburgerIcon = (): React.Element<*> => (
  <svg height="32" viewBox="0 0 32 32" width="32" fill="white">
    <path d="M4 10h24c1.104 0 2-.896 2-2s-.896-2-2-2H4c-1.104 0-2 .896-2 2s.896 2 2 2zm24 4H4c-1.104 0-2 .896-2 2s.896 2 2 2h24c1.104 0 2-.896 2-2s-.896-2-2-2zm0 8H4c-1.104 0-2 .896-2 2s.896 2 2 2h24c1.104 0 2-.896 2-2s-.896-2-2-2z"/>
  </svg>
);

export default HamburgerIcon;
