import { commitMutation, graphql } from 'react-relay';
import environment from '../../data/relayEnv';

const mutation = graphql`
  mutation CreateToDoMutation($input: ToDoInput!)
  {
    createToDo(input: $input){
      ...ToDo      
    }
  }
`;

export default function AddToDo(city_id, text) {
  const variables = {
    input: {
      city_id: city_id,
      text: text
    }
  };
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {},
      onError: err => console.error(err)
    }
  );
}
