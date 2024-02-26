/**
 * @generated SignedSource<<698544b186909f5c8d5b83d114a347a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteProjectInput = {
  id: string;
};
export type deleteProjectDetailsMutation$variables = {
  input: DeleteProjectInput;
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
    "cacheID": "2061633d3a60680a2d38e0c93e6679f2",
    "id": null,
    "metadata": {},
    "name": "deleteProjectDetailsMutation",
    "operationKind": "mutation",
    "text": "mutation deleteProjectDetailsMutation(\n  $input: DeleteProjectInput!\n) {\n  deleteProjectDetails(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "d3e0e2ad2202ad4e9d427624c539f683";

export default node;
