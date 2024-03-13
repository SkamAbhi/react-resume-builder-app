/**
 * @generated SignedSource<<39a538f83399bd4728f33486f020f596>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteProjectDetailsInput = {
  id: string;
};
export type deleteProjectDetailsMutation$variables = {
  input: DeleteProjectDetailsInput;
};
export type deleteProjectDetailsMutation$data = {
  readonly deleteProjectDetails: {
    readonly success: boolean;
  };
};
export type deleteProjectDetailsMutation = {
  response: deleteProjectDetailsMutation$data;
  variables: deleteProjectDetailsMutation$variables;
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
    "concreteType": "DeleteProjectPayload",
    "kind": "LinkedField",
    "name": "deleteProjectDetails",
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
    "name": "deleteProjectDetailsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteProjectDetailsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f3060f121c3f4b61e0bec35d6be19999",
    "id": null,
    "metadata": {},
    "name": "deleteProjectDetailsMutation",
    "operationKind": "mutation",
    "text": "mutation deleteProjectDetailsMutation(\n  $input: DeleteProjectDetailsInput!\n) {\n  deleteProjectDetails(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "676a4c6788c4bcab7c7c525b3a2654d4";

export default node;
