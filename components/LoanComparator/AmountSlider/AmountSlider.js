/* @flow */
/**
 * Loan comparator amount slider component.
 * @module Components/AmountSlider
 */

import React from 'react';
import { pure } from 'recompose';

import ComparatorValue from 'Components/LoanComparator/ComparatorValue';
import ComparatorSlider from 'Components/LoanComparator/ComparatorSlider';

const LOAN_CONFIG = {
  MIN_AMOUNT: 100,
  MAX_AMOUNT: 10000,
};

type PropsType = {
  amount: number,
  onAmountChange: (value: number, event: SyntheticEvent) => void,
};

/**
 * Loan comparator amount slider component.
 * @constructor
 * @param {PropsType} props Component properties.
 * @returns {ReactElement}
 */
const AmountSlider = (props): React.Element<*> => {
  const { amount, onAmountChange } = props;
  return (
    <div className="amount-slider">
      <style jsx>{`
        .amount-slider {
          display: flex;
          align-items: center;
        }

        .amount-slider__wrapper {
          position: relative;
          width: 80%;
        }
      `}</style>
        <div className="amount-slider__wrapper">
          <ComparatorSlider
            value={amount}
            step={100}
            min={LOAN_CONFIG.MIN_AMOUNT}
            max={LOAN_CONFIG.MAX_AMOUNT}
            tooltip={false}
            onValueChange={onAmountChange}
          />
        </div>
        <ComparatorValue value={amount} unit="PLN" />
    </div>
  );
}

export default pure(AmountSlider);
