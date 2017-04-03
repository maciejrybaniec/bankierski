/* @flow */
/**
 * Search results component.
 * @module Components/SearchResults
 */

import React from 'react';
import { pure, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

import LoanItem from 'Components/LoanItem';

const searchLoansQuery = gql`
  query UserQuery($id: Int!) {
    user(id: $id) {
      ...LoanUser
    }
  }
  ${LoanItem.fragments.user}
`;

const enhance = compose(
  pure,
  graphql(searchLoansQuery, {
    options: ({ days, amount }) => ({
      variables: {
        id: days
      },
    }),
  })
);

/**
 * Search results component.
 * @constructor
 * @param {PropsType} props Component properties.
 * @returns {ReactElement}
 */
const SearchResults = (props) => {
  const { data: { user } } = props;
  return (
    <div>
      {user ? (
        <LoanItem description={user.description} />
      ) : null}

    </div>
  );
}

export default enhance(SearchResults);
