import React from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// const FEED_QUERY = gql`
//   {
//     feed {
//       links {
//         id
//         createdAt
//         url
//         description
//       }
//     }
//   }
// `;

class LinkList extends React.Component {
  FEED_QUERY = gql`
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

  renderLinks(loading, error, data) {    
    if (loading) return <div>Fetching data...</div>;
    if (error) return <div>Error fetching data</div>;

    return data.feed.links.map((link) => {
      return <Link link={link} key={link.id}/>;
    });
  }

  render() {
    return (
      <Query query={this.FEED_QUERY}>
        {({loading, error, data}) => this.renderLinks(loading, error, data)}
      </Query>
    );
  }
}

export default LinkList;
