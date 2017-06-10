/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule ToDoListQuery.graphql
 * @generated SignedSource<<fdfff2302ee9c6f59153b62abaad7877>>
 * @relayHash a33001a0c41e73148fa49bde109eff59
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/


/*
query ToDoListQuery(
  $cityID: Int!
) {
  city(id: $cityID) {
    todo {
      ...ToDo
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
            "name": "id",
            "variableName": "cityID",
            "type": "Int"
          }
        ],
        "concreteType": "City",
        "name": "city",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ToDo",
            "name": "todo",
            "plural": true,
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
            "name": "id",
            "variableName": "cityID",
            "type": "Int"
          }
        ],
        "concreteType": "City",
        "name": "city",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ToDo",
            "name": "todo",
            "plural": true,
            "selections": [
              {
                "kind": "InlineFragment",
                "type": "ToDo",
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
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ToDoListQuery(\n  $cityID: Int!\n) {\n  city(id: $cityID) {\n    todo {\n      ...ToDo\n    }\n  }\n}\n\nfragment ToDo on ToDo {\n  text\n  likes\n  _id\n}\n"
};

module.exports = batch;