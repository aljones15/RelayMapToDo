/**
 * @flow
 * @relayHash 390e0153e45721f3100787fae7194333
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ToDo$ref = any;
export type CreateToDoMutationVariables = {|
  input: {
    city_id: number,
    text?: ?string,
  },
|};
export type CreateToDoMutationResponse = {|
  +createToDo: ?{|
    +$fragmentRefs: ToDo$ref,
  |},
|};
*/

/*
mutation CreateToDoMutation(
  $input: ToDoInput!
) {
  createToDo(input: $input) {
    ...ToDo
    id
  }
}

fragment ToDo on ToDo {
  text
  likes
  _id
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'input',
        type: 'ToDoInput!',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'input',
        variableName: 'input',
        type: 'ToDoInput',
      },
    ];
  return {
    kind: 'Request',
    operationKind: 'mutation',
    name: 'CreateToDoMutation',
    id: null,
    text:
      'mutation CreateToDoMutation(\n  $input: ToDoInput!\n) {\n  createToDo(input: $input) {\n    ...ToDo\n    id\n  }\n}\n\nfragment ToDo on ToDo {\n  text\n  likes\n  _id\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'CreateToDoMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'createToDo',
          storageKey: null,
          args: v1,
          concreteType: 'ToDo',
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'ToDo',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'CreateToDoMutation',
      argumentDefinitions: v0,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'createToDo',
          storageKey: null,
          args: v1,
          concreteType: 'ToDo',
          plural: false,
          selections: [
            {
              kind: 'ScalarField',
              alias: null,
              name: 'text',
              args: null,
              storageKey: null,
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'likes',
              args: null,
              storageKey: null,
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: '_id',
              args: null,
              storageKey: null,
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'id',
              args: null,
              storageKey: null,
            },
          ],
        },
      ],
    },
  };
})();
node /*: any*/.hash = '99c6bff892111ab3d6c885f512d22f9c';
module.exports = node;
