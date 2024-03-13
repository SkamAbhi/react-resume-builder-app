/**
 * @generated SignedSource<<7f9d2fd3c21a31b83b7057576740228d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewResumeInput = {
  name?: string | null | undefined;
  userId?: string | null | undefined;
};
export type resumeIdMutation$variables = {
  input: AddNewResumeInput;
};
export type resumeIdMutation$data = {
  readonly addNewResume: {
    readonly id: string;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type resumeIdMutation = {
  response: resumeIdMutation$data;
  variables: resumeIdMutation$variables;
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
    "concreteType": "AddNewResumePayload",
    "kind": "LinkedField",
    "name": "addNewResume",
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
        "name": "id",
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
    "name": "resumeIdMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "resumeIdMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1cebd795896f1659f10d3997f71d7a78",
    "id": null,
    "metadata": {},
    "name": "resumeIdMutation",
    "operationKind": "mutation",
    "text": "mutation resumeIdMutation(\n  $input: AddNewResumeInput!\n) {\n  addNewResume(input: $input) {\n    success\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6d78eb5836f9a046330860670eb930fe";

export default node;
