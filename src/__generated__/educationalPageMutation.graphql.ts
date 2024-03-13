/**
 * @generated SignedSource<<3a48e9981045a8c058e133403ebeaced>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewEducationInput = {
  degree: string;
  description?: string | null | undefined;
  endDate: string;
  fieldOfStudy: string;
  instituteLocation: string;
  instituteName: string;
  startDate: string;
};
export type educationalPageMutation$variables = {
  input: AddNewEducationInput;
};
export type educationalPageMutation$data = {
  readonly addNewEducation: {
    readonly id: string;
    readonly success: boolean;
  } | null | undefined;
};
export type educationalPageMutation = {
  response: educationalPageMutation$data;
  variables: educationalPageMutation$variables;
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
    "concreteType": "AddEducationPayload",
    "kind": "LinkedField",
    "name": "addNewEducation",
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
    "name": "educationalPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "educationalPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7d742a64057b7c9dfdb24243e26bf036",
    "id": null,
    "metadata": {},
    "name": "educationalPageMutation",
    "operationKind": "mutation",
    "text": "mutation educationalPageMutation(\n  $input: AddNewEducationInput!\n) {\n  addNewEducation(input: $input) {\n    success\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d5fa369acf89bbcbf3ce8c4afc7f274f";

export default node;
