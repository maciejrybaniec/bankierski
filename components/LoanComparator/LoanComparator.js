/* @flow */
/**
 * Loan comparator component.
 * @module Components/LoanComparator
 */

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import Container from 'Components/Container';
import AmountSlider from './AmountSlider';
import DaysSlider from './DaysSlider';
import ComparatorHeader from './ComparatorHeader';

const enhance = compose(
  withState('amount', 'setAmount', 1000),
  withState('days', 'setDays', 10),
  withHandlers({
    onAmountChange: props => (value: number, event: SyntheticEvent) => {
      const { setAmount } = props;
      setAmount(value);
    },
    onDaysChange: props => (value: number, event: SyntheticEvent) => {
      const { setDays } = props;
      setDays(value);
    },
  })
);

/**
 * Loan comparator component.
 * @constructor
 * @returns {ReactElement}
 */
const LoanComparator = (props): React.Element<*> => {
  const { amount, days, onAmountChange, onDaysChange } = props;
  return (
    <div className="loan-comparator">
      <style jsx>{`
        .loan-comparator__wrapper {
          padding: 30px 0;
          background: url('static/img/blue-background.png');
        }

        .loan-comparator__sliders {
          padding: 0 50px;
        }
      `}</style>
      <Container>
        <div className="loan-comparator__wrapper">
          <ComparatorHeader />
          <section className="loan-comparator__sliders">
            <AmountSlider amount={amount} onAmountChange={onAmountChange} />
            <DaysSlider days={days} onDaysChange={onDaysChange} />
          </section>
        </div>
      </Container>
    </div>
  );
}

export default enhance(LoanComparator);
