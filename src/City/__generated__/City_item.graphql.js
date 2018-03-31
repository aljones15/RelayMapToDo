/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type City_item$ref: FragmentReference;
export type City_item = {|
  +_id: number,
  +$refType: City_item$ref,
|};
*/

const node /*: ConcreteFragment*/ = {
  kind: 'Fragment',
  name: 'City_item',
  type: 'City',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      name: '_id',
      args: null,
      storageKey: null,
    },
  ],
};
node /*: any*/.hash = '05ff143fab81288e6b29767659491756';
module.exports = node;
