import React from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

function LinkList() {
  const FEED_QUERY = gql`
    {
      feed {
        links {
          id
          createdAt
          url
          description
        }
      }
    }
  `;

  function renderLinks(loading, error, data) {    
    if (loading) return <div>Fetching data...</div>;
    if (error) return <div>Error fetching data</div>;

    return data.feed.links.map((link) => {
      return <Link link={link} key={link.id}/>;
    });
  }

  return (
    <Query query={FEED_QUERY}>
      {({loading, error, data}) => renderLinks(loading, error, data)}
    </Query>
  );
}

export default LinkList;
