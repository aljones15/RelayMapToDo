/**
 * @flow
 * @relayHash 3456822f953090591568d8e0d56e757c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type City_item$ref = any;
export type MapQueryVariables = {| |};
export type MapQueryResponse = {|
  +cities: ?$ReadOnlyArray<?{|
    +lat: ?number,
    +lng: ?number,
    +$fragmentRefs: City_item$ref,
  |}>,
|};
*/

/*
query MapQuery {
  cities {
    lat
    lng
    ...City_item
    id
  }
}

fragment City_item on City {
  _id
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = {
      kind: 'ScalarField',
      alias: null,
      name: 'lat',
      args: null,
      storageKey: null,
    },
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'lng',
      args: null,
      storageKey: null,
    };
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'MapQuery',
    id: null,
    text:
      'query MapQuery {\n  cities {\n    lat\n    lng\n    ...City_item\n    id\n  }\n}\n\nfragment City_item on City {\n  _id\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'MapQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: [],
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'cities',
          storageKey: null,
          args: null,
          concreteType: 'City',
          plural: true,
          selections: [
            v0,
            v1,
            {
              kind: 'FragmentSpread',
              name: 'City_item',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'MapQuery',
      argumentDefinitions: [],
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'cities',
          storageKey: null,
          args: null,
          concreteType: 'City',
          plural: true,
          selections: [
            v0,
            v1,
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
node /*: any*/.hash = '721739746d7cf32e2045881bae41323d';
module.exports = node;
