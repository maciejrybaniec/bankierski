/* @flow */
/**
 * Loan item component.
 * @module Components/LoanItem
 */

import React from 'react';
import cx from 'classnames';
import gql from 'graphql-tag';

/**
 * Loan item component.
 * @constructor
 * @param {PropsType} props Component properties.
 * @returns {ReactElement}
 */
const LoanItem = (props: PropsType): React.Element<*> => {
  const { description } = props;
  return (
    <div>{description}</div>
  );
};

LoanItem.fragments = {
  user: gql`
    fragment LoanUser on User {
      name
      description
    }
  `
};

export default LoanItem;
