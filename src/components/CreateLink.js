import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class CreateLink extends React.Component {
  state = {
    description: '',
    url: ''
  };

  POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
      post(description: $description, url: $url) {
        id
        createdAt
        url
        description
      }
    }
  `;

  render() {
    const { description, url } = this.state;

    return (
      <div>
        <div className='flex flex-column mt3'>
          <input
            className='mb2'
            value={description}
            onChange={(event) => this.setState({description: event.target.value})}
            type='text'
            placeholder='write a description of the link'
          />
          <input
            className='mb2'
            value={url}
            onChange={(event) => this.setState({url: event.target.value})}
            type='text'
            placeholder='write a url for the link'
          />
        </div>
        <Mutation
          mutation={this.POST_MUTATION}
          variables={{description, url}}
          onCompleted={() => this.props.history.push('/')}
        >
          {(postMutation) => (
            <button onClick={postMutation}>
              Submit
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
