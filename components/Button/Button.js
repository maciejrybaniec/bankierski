/* @flow */
/**
 * Button component.
 * @module Components/Button
 */

import React from 'react';
import cx from 'classnames';
import { pure } from 'recompose';

type PropsType = {
  className?: string,
  children?: React.Element<*>,
  onClick: () => void,
};

/**
 * Button component.
 * @constructor
 * @returns {ReactElement}
 */
const Button = (props: PropsType): React.Element<*> => {
  const { children, className, onClick } = props;
  return (
    <button
      className={cx('button', className)}
      onClick={onClick}
      role="button"
    >
      <style jsx>{`
      `}</style>
      {children}
    </button>
  );
}

export default pure(Button);
