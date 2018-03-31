/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type ToDoList_todo$ref: FragmentReference;
export type ToDoList_todo = {|
  +todo: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +text: ?string,
        +likes: ?number,
      |},
      +cursor: string,
    |}>,
    +pageInfo: ?{|
      +endCursor: string,
      +hasNextPage: boolean,
    |},
  |},
  +$refType: ToDoList_todo$ref,
|};
*/

const node /*: ConcreteFragment*/ = {
  kind: 'Fragment',
  name: 'ToDoList_todo',
  type: 'City',
  metadata: {
    connection: [
      {
        count: 'count',
        cursor: 'cursor',
        direction: 'forward',
        path: ['todo'],
      },
    ],
  },
  argumentDefinitions: [
    {
      kind: 'RootArgument',
      name: 'count',
      type: 'Int',
    },
    {
      kind: 'RootArgument',
      name: 'cursor',
      type: 'String',
    },
  ],
  selections: [
    {
      kind: 'LinkedField',
      alias: 'todo',
      name: '__ToDoConnection_todo_connection',
      storageKey: null,
      args: null,
      concreteType: 'ToDoConnection',
      plural: false,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'edges',
          storageKey: null,
          args: null,
          concreteType: 'ToDoEdge',
          plural: true,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'node',
              storageKey: null,
              args: null,
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
                  name: '__typename',
                  args: null,
                  storageKey: null,
                },
              ],
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'cursor',
              args: null,
              storageKey: null,
            },
          ],
        },
        {
          kind: 'LinkedField',
          alias: null,
          name: 'pageInfo',
          storageKey: null,
          args: null,
          concreteType: 'ToDoPageInfo',
          plural: false,
          selections: [
            {
              kind: 'ScalarField',
              alias: null,
              name: 'endCursor',
              args: null,
              storageKey: null,
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'hasNextPage',
              args: null,
              storageKey: null,
            },
          ],
        },
      ],
    },
  ],
};
node /*: any*/.hash = '818a426c0b6b63a46bc36f6727ba9699';
module.exports = node;
