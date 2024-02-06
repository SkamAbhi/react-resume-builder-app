/**
 * @generated SignedSource<<2570d0491b29776131d8e3db3bf8e431>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewPersonalInfoInput = {
  city?: string | null | undefined;
  country?: string | null | undefined;
  email?: string | null | undefined;
  firstName?: string | null | undefined;
  phone?: string | null | undefined;
  pinCode?: string | null | undefined;
  profession?: string | null | undefined;
  surName?: string | null | undefined;
};
export type personalPageMutation$variables = {
  input: AddNewPersonalInfoInput;
};
export type personalPageMutation$data = {
  readonly addNewPersonalInfo: {
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type personalPageMutation = {
  response: personalPageMutation$data;
  variables: personalPageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddNewPersonalInfoPayload",
    "kind": "LinkedField",
    "name": "addNewPersonalInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "personalPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "personalPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e5668e5f58d988ab2577742a003fceec",
    "id": null,
    "metadata": {},
    "name": "personalPageMutation",
    "operationKind": "mutation",
    "text": "mutation personalPageMutation(\n  $input: AddNewPersonalInfoInput!\n) {\n  addNewPersonalInfo(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "e52e3810bd06ce6f9a5c67b9b840a626";

export default node;
