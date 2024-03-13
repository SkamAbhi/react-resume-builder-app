/**
 * @generated SignedSource<<6bbf3ce4a8f5af86a2e4b3c550a803f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewSummaryInput = {
  summaryDetails?: string | null | undefined;
};
export type summaryPageMutation$variables = {
  input: AddNewSummaryInput;
};
export type summaryPageMutation$data = {
  readonly addNewSummary: {
    readonly id: string;
    readonly success: boolean;
  } | null | undefined;
};
export type summaryPageMutation = {
  response: summaryPageMutation$data;
  variables: summaryPageMutation$variables;
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
    "concreteType": "AddSummaryPayload",
    "kind": "LinkedField",
    "name": "addNewSummary",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
    "name": "summaryPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "summaryPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "93a1a9ba774062e3f6cecbc69f46ce9b",
    "id": null,
    "metadata": {},
    "name": "summaryPageMutation",
    "operationKind": "mutation",
    "text": "mutation summaryPageMutation(\n  $input: AddNewSummaryInput!\n) {\n  addNewSummary(input: $input) {\n    id\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "437b995f8fd02d18a266c3a60e862b3a";

export default node;
