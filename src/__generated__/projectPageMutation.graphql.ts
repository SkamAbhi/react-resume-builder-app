/**
 * @generated SignedSource<<1b15a9de718b07567ba58e9156fe73d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewProjectInput = {
  description?: string | null | undefined;
  idResume: string;
  projectName: string;
  results?: string | null | undefined;
  role: string;
  technologies?: ReadonlyArray<string> | null | undefined;
};
export type projectPageMutation$variables = {
  input: AddNewProjectInput;
};
export type projectPageMutation$data = {
  readonly addNewProject: {
    readonly id: string;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type projectPageMutation = {
  response: projectPageMutation$data;
  variables: projectPageMutation$variables;
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
    "concreteType": "AddNewProjectPayload",
    "kind": "LinkedField",
    "name": "addNewProject",
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
    "name": "projectPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "projectPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8584adbac45fd9331b3e0abe30f234ce",
    "id": null,
    "metadata": {},
    "name": "projectPageMutation",
    "operationKind": "mutation",
    "text": "mutation projectPageMutation(\n  $input: AddNewProjectInput!\n) {\n  addNewProject(input: $input) {\n    success\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2d2e3dbf0e1053fc7909cfb3ea96031";

export default node;
