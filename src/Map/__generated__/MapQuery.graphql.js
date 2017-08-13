/**
 * @flow
 * @relayHash ae5492828c0dd0535842180b95782e22
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MapQueryResponse = {|
  +cities: ?$ReadOnlyArray<?{|
    +lat: ?number;
    +lng: ?number;
  |}>;
|};
*/


/*
query MapQuery {
  cities {
    lat
    lng
    ...City_item
  }
}

fragment City_item on City {
  _id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MapQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "City",
        "name": "cities",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lat",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lng",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "City_item",
            "args": null
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
  "name": "MapQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "MapQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "City",
        "name": "cities",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lat",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lng",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "City",
            "selections": [
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
    ]
  },
  "text": "query MapQuery {\n  cities {\n    lat\n    lng\n    ...City_item\n  }\n}\n\nfragment City_item on City {\n  _id\n}\n"
};

module.exports = batch;
