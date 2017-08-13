/**
 * @flow
 * @relayHash 1e26720292aff8fb30ba2ee7b60a0067
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateToDoMutationVariables = {|
  input: {
    city_id: number;
    text?: ?string;
  };
|};

export type CreateToDoMutationResponse = {|
  +createToDo: ?{| |};
|};
*/


/*
mutation CreateToDoMutation(
  $input: ToDoInput!
) {
  createToDo(input: $input) {
    ...ToDo
  }
}

fragment ToDo on ToDo {
  text
  likes
  _id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateToDoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ToDoInput"
          }
        ],
        "concreteType": "ToDo",
        "name": "createToDo",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ToDo",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateToDoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateToDoMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ToDoInput"
          }
        ],
        "concreteType": "ToDo",
        "name": "createToDo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "text",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "_id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateToDoMutation(\n  $input: ToDoInput!\n) {\n  createToDo(input: $input) {\n    ...ToDo\n  }\n}\n\nfragment ToDo on ToDo {\n  text\n  likes\n  _id\n}\n"
};

module.exports = batch;
