/* @flow */
/**
 * Loan comparator header component.
 * @module Components/ComparatorHeader
 */

import React from 'react';
import { pure } from 'recompose';

import colors from 'Styles/colors';

/**
 * Loan comparator header component.
 * @constructor
 * @returns {ReactElement}
 */
const ComparatorHeader = (): React.Element<*> => {
  return (
    <header className="comparator-header">
      <style jsx>{`
        .comparator-header {
          color: ${colors.white};
          text-transform: uppercase;
          text-align: center;
        }

        h1, h2 {
          margin: 0;
          text-shadow: 1px 1px 3px ${colors.aqua};
        }

        h1 {
          font-weight: 400;
        }

        h2 {
          font-weight: 300;
        }
      `}</style>
      <h1>Potrzebujesz gotówki?</h1>
      <h2><strong>Porównaj</strong> najlepsze oferty kredytów i pożyczek</h2>
    </header>
  );
}

export default pure(ComparatorHeader);
