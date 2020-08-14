import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

function CreateLink(props) {
  const [formState, setFormState] = useState({
    description: '',
    url: ''
  });

  const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
      post(description: $description, url: $url) {
        id
        createdAt
        url
        description
      }
    }
  `;

  const { description, url } = formState;

  return (
    <div>
      <div className='flex flex-column mt3'>
        <input
          className='mb2'
          value={description}
          onChange={(event) => setFormState({...formState, description: event.target.value})}
          type='text'
          placeholder='write a description of the link'
        />
        <input
          className='mb2'
          value={url}
          onChange={(event) => setFormState({...formState, url: event.target.value})}
          type='text'
          placeholder='write a url for the link'
        />
      </div>
      <Mutation
        mutation={POST_MUTATION}
        variables={{description, url}}
        onCompleted={() => props.history.push('/')}
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

export default CreateLink;
