/**
 * @flow
 * @relayHash f19970fcd9ad4c5228ad2c7a98d5ebfc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ToDoList_todo$ref = any;
export type ToDoListQueryVariables = {|
  cityID: number,
  count: number,
  cursor?: ?string,
|};
export type ToDoListQueryResponse = {|
  +city: ?{|
    +$fragmentRefs: ToDoList_todo$ref,
  |},
|};
*/

/*
query ToDoListQuery(
  $cityID: Int!
  $count: Int!
  $cursor: String
) {
  city(cityID: $cityID) {
    ...ToDoList_todo
    id
  }
}

fragment ToDoList_todo on City {
  todo(first: $count, after: $cursor) {
    edges {
      node {
        text
        likes
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'cityID',
        type: 'Int!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'count',
        type: 'Int!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'cursor',
        type: 'String',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'cityID',
        variableName: 'cityID',
        type: 'Int!',
      },
    ],
    v2 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    };
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'ToDoListQuery',
    id: null,
    text:
      'query ToDoListQuery(\n  $cityID: Int!\n  $count: Int!\n  $cursor: String\n) {\n  city(cityID: $cityID) {\n    ...ToDoList_todo\n    id\n  }\n}\n\nfragment ToDoList_todo on City {\n  todo(first: $count, after: $cursor) {\n    edges {\n      node {\n        text\n        likes\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'ToDoListQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'city',
          storageKey: null,
          args: v1,
          concreteType: 'City',
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'ToDoList_todo',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'ToDoListQuery',
      argumentDefinitions: v0,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'city',
          storageKey: null,
          args: v1,
          concreteType: 'City',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'todo',
              storageKey: null,
              args: [
                {
                  kind: 'Variable',
                  name: 'after',
                  variableName: 'cursor',
                  type: 'String',
                },
                {
                  kind: 'Variable',
                  name: 'first',
                  variableName: 'count',
                  type: 'Int',
                },
              ],
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
                        v2,
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
            {
              kind: 'LinkedHandle',
              alias: null,
              name: 'todo',
              args: [
                {
                  kind: 'Variable',
                  name: 'after',
                  variableName: 'cursor',
                  type: 'String',
                },
                {
                  kind: 'Variable',
                  name: 'first',
                  variableName: 'count',
                  type: 'Int',
                },
              ],
              handle: 'connection',
              key: 'ToDoConnection_todo',
              filters: null,
            },
            v2,
          ],
        },
      ],
    },
  };
})();
node /*: any*/.hash = '8f26fd392abc4ce4f319b7dce16e3cdd';
module.exports = node;
