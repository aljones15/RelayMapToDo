/**
 * @flow
 * @relayHash 3ea0ab70a8977be241972143023728b7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ToDoListQueryResponse = {|
  +city: ?{|
    +todo: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +cursor: string;
        +node: ?{| |};
      |}>;
    |};
  |};
|};
*/


/*
query ToDoListQuery(
  $cityID: Int!
  $first: Int!
  $after: String!
) {
  city(cityID: $cityID) {
    todo(first: $first, after: $after) {
      edges {
        cursor
        node {
          ...ToDo
        }
      }
    }
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
        "name": "cityID",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ToDoListQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "cityID",
            "variableName": "cityID",
            "type": "Int!"
          }
        ],
        "concreteType": "City",
        "name": "city",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "after",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
                "type": "Int"
              }
            ],
            "concreteType": "ToDoConnection",
            "name": "todo",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ToDoEgde",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ToDo",
                    "name": "node",
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
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ToDoListQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "cityID",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ToDoListQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "cityID",
            "variableName": "cityID",
            "type": "Int!"
          }
        ],
        "concreteType": "City",
        "name": "city",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "after",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
                "type": "Int"
              }
            ],
            "concreteType": "ToDoConnection",
            "name": "todo",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ToDoEgde",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ToDo",
                    "name": "node",
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
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ToDoListQuery(\n  $cityID: Int!\n  $first: Int!\n  $after: String!\n) {\n  city(cityID: $cityID) {\n    todo(first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...ToDo\n        }\n      }\n    }\n  }\n}\n\nfragment ToDo on ToDo {\n  text\n  likes\n  _id\n}\n"
};

module.exports = batch;
