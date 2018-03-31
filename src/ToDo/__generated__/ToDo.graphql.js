/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type ToDo$ref: FragmentReference;
export type ToDo = {|
  +text: ?string,
  +likes: ?number,
  +_id: number,
  +$refType: ToDo$ref,
|};
*/

const node /*: ConcreteFragment*/ = {
  kind: 'Fragment',
  name: 'ToDo',
  type: 'ToDo',
  metadata: null,
  argumentDefinitions: [],
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
  ],
};
node /*: any*/.hash = 'c3fdb684e39a3108c1db9b943aea66c8';
module.exports = node;
