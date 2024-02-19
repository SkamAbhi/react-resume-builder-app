/**
 * @generated SignedSource<<f26ae4ee92bf74ad6b029ae72b187c2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewPersonalInfoAndAddressInput = {
  city: string;
  country: string;
  email: string;
  firstName: string;
  idResume: string;
  lastName: string;
  phoneNumber: string;
  profession: string;
  zipcode: string;
};
export type personalPageMutation$variables = {
  input: AddNewPersonalInfoAndAddressInput;
};
export type personalPageMutation$data = {
  readonly addNewPersonalInfoAndAddress: {
    readonly personalAddressId: string | null | undefined;
    readonly personalInfoId: string | null | undefined;
    readonly success: boolean;
  };
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
    "concreteType": "AddNewPersonalInfoAndAddressPayload",
    "kind": "LinkedField",
    "name": "addNewPersonalInfoAndAddress",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "personalInfoId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "personalAddressId",
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
    "cacheID": "f70173c3f09e42bdb936290fa9140abc",
    "id": null,
    "metadata": {},
    "name": "personalPageMutation",
    "operationKind": "mutation",
    "text": "mutation personalPageMutation(\n  $input: AddNewPersonalInfoAndAddressInput!\n) {\n  addNewPersonalInfoAndAddress(input: $input) {\n    success\n    personalInfoId\n    personalAddressId\n  }\n}\n"
  }
};
})();

(node as any).hash = "a513416bc3437784ced6fe151cb3d657";

export default node;
