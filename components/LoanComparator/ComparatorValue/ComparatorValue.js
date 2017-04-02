/* @flow */
/**
 * Loan comparator value component.
 * @module Components/ComparatorValue
 */

import React from 'react';
import { pure } from 'recompose';

import colors from 'Styles/colors';

type PropsType = {
  value: number,
  unit: string,
};

/**
 * Loan comparator value component.
 * @constructor
 * @returns {ReactElement}
 */
const ComparatorValue = (props: PropsType): React.Element<*> => {
  const { value, unit } = props;
  return (
    <div className="comparator-value">
      <style jsx>{`
        .comparator-value {
          display: flex;
          align-items: center;
        }

        .comparator-value__label {
          display: flex;
          justify-content: center;
          align-items: center;

          margin: 0 10px;
          width: 80px;
          height: 22px;
          background-color: ${colors.white};
          text-align: center;
        }

        .comparator-value__unit {
          color: ${colors.white};
          text-transform: uppercase;
        }
      `}</style>
      <span className="comparator-value__label">
        {value}
      </span>
      <div className="comparator-value__unit">
        {unit}
      </div>
    </div>
  );
}

export default pure(ComparatorValue);
