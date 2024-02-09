/**
 * @generated SignedSource<<0a328f8d9ae5b7075071af52515b2f6f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewPersonalInfoInput = {
  email?: string | null | undefined;
  firstName?: string | null | undefined;
  id?: string | null | undefined;
  lastName?: string | null | undefined;
  phone?: string | null | undefined;
  profession?: string | null | undefined;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "personalPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddNewPersonalInfoPayload",
        "kind": "LinkedField",
        "name": "addNewPersonalInfo",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "personalPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddNewPersonalInfoPayload",
        "kind": "LinkedField",
        "name": "addNewPersonalInfo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4356edfbe635308005b2f94fa688ecc4",
    "id": null,
    "metadata": {},
    "name": "personalPageMutation",
    "operationKind": "mutation",
    "text": "mutation personalPageMutation(\n  $input: AddNewPersonalInfoInput!\n) {\n  addNewPersonalInfo(input: $input) {\n    success\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e52e3810bd06ce6f9a5c67b9b840a626";

export default node;
