/* @flow */
/**
 * Loan comparator days slider component.
 * @module Components/DaysSlider
 */

import React from 'react';
import { pure } from 'recompose';

import ComparatorValue from 'Components/LoanComparator/ComparatorValue';
import ComparatorSlider from 'Components/LoanComparator/ComparatorSlider';

const LOAN_CONFIG = {
  MIN_DAYS: 1,
  MAX_DAYS: 30,
};

type PropsType = {
  days: number,
  onDaysChange: (value: number, event: SyntheticEvent) => void,
};

/**
 * Loan comparator days slider component.
 * @constructor
 * @param {PropsType} props Component properties.
 * @returns {ReactElement}
 */
const DaysSlider = (props): React.Element<*> => {
  const { days, onDaysChange } = props;
  return (
    <div className="days-slider">
      <style jsx>{`
        .days-slider {
          display: flex;
          align-items: center;
        }

        .days-slider__wrapper {
          position: relative;
          width: 80%;
        }
      `}</style>
        <div className="days-slider__wrapper">
          <ComparatorSlider
            value={days}
            step={1}
            min={LOAN_CONFIG.MIN_DAYS}
            max={LOAN_CONFIG.MAX_DAYS}
            tooltip={false}
            onValueChange={onDaysChange}
          />
        </div>
        <ComparatorValue value={days} unit="DNI" />
    </div>
  );
}

export default pure(DaysSlider);
