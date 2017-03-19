/* @flow */
/**
 * Loan comparator component.
 * @module Components/LoanComparator
 */

import React from 'react';

import Container from 'Components/Container';

import colors from 'Styles/colors';

/**
 * Loan comparator component.
 * @constructor
 * @returns {ReactElement}
 */
const LoanComparator = (): React.Element<*> => {
  return (
    <div className="loan-comparator">
      <style jsx>{`
        .loan-comparator__wrapper {
          padding: 30px 0;

          background: url('static/img/blue-background.png');
        }

        header {
          color: ${colors.white};
          text-transform: uppercase;
          text-align: center;
        }

        h1, h2 {
          text-shadow: 1px 1px 3px ${colors.aqua};
        }

        h1 {
          font-weight: 400;
        }

        h2 {
          font-weight: 300;
        }
      `}</style>
      <Container>
        <div className="loan-comparator__wrapper">
          <header>
            <h1>Potrzebujesz gotówki?</h1>
            <h2><strong>Porównaj</strong> najlepsze oferty kredytów i pożyczek</h2>
          </header>
        </div>
      </Container>
    </div>
  );
}

export default LoanComparator;
