import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation CreateToDoMutation($input: ToDoInput!)
  {
    createToDo(input: $input){
      ...ToDo      
    }
  }
`;
// pass the env with  this.props.relay.environment
/**
 * AddToDo - adds a to do
 * @param {number} city_id - the cities id
 * @param {string} text - the to do description
 * @param {Object} env - the env available from relay
*/
export default function AddToDo(city_id, text, env) {
  const variables = {
    input: {
      city_id: city_id,
      text: text
    }
  };
  commitMutation(
    env,
    {
      mutation,
      variables,
      onCompleted: (response) => {},
      onError: err => console.error(err)
    }
  );
}
