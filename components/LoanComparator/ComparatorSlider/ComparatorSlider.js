/* @flow */
/**
 * Loan comparator slider component.
 * @module Components/ComparatorSlider
 */

import React from 'react';
import { pure } from 'recompose';
import Slider from 'react-rangeslider';

import colors from 'Styles/colors';

type PropsType = {
  value: number,
  onValueChange: (value: number, event: SyntheticEvent) => void,
};

/**
 * Loan comparator slider.
 * @constructor
 * @param {PropsType} props Component properties.
 * @returns {ReactElement}
 */
const ComparatorSlider = (props: PropsType): React.Element<*> => {
  const { value, onValueChange, ...restProps } = props;
  return (
    <div className="comparator-slider">
      <style jsx global>{`
        .rangeslider {
          position: relative;
          background-color: ${colors.white};
      }

      .rangeslider-horizontal {
        height: 18px;
        border-radius: 10px;
      }

      .rangeslider__handle {
        position: absolute;
        top: -3px;
        width: 25px;
        height: 25px;

        background: url('static/img/slider-button.png');
        cursor: pointer;
      }

      .rangeslider__fill {
        height: 100%;
        background: url('static/img/slider-pattern.png');
        border-radius: 10px;
        top: 0;
      }
      `}</style>
      <Slider
        value={value}
        onChange={onValueChange}
        {...restProps}
      />
    </div>
  );
}

export default pure(ComparatorSlider);
