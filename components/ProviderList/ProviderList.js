import React from 'react';
import { gql, graphql } from 'react-apollo';

const ProviderList = (props) => {
  const { data: { user } } = props;
  return (
    <div>
      Test
      {user ? user.name: null}
    </div>
  );
}

const userQuery = gql`
  query UserQuery {
    user(id: 1) {
      name
    }
  }
`;

export default graphql(userQuery)(ProviderList);
