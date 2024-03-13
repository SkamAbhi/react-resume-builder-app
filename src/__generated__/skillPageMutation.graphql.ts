/**
 * @generated SignedSource<<f46946f404b1ff46792a14c8a8ea30a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewSkillInput = {
  idResume: string;
  skillName: string;
};
export type skillPageMutation$variables = {
  input: AddNewSkillInput;
};
export type skillPageMutation$data = {
  readonly addNewSkill: {
    readonly id: string;
    readonly success: boolean;
  };
};
export type skillPageMutation = {
  response: skillPageMutation$data;
  variables: skillPageMutation$variables;
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
    "concreteType": "AddNewSkillPayload",
    "kind": "LinkedField",
    "name": "addNewSkill",
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
    "name": "skillPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "skillPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3fab6320b676dcdd52811c37437fad27",
    "id": null,
    "metadata": {},
    "name": "skillPageMutation",
    "operationKind": "mutation",
    "text": "mutation skillPageMutation(\n  $input: AddNewSkillInput!\n) {\n  addNewSkill(input: $input) {\n    success\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "cfcbd9139f98f62829029e7d7908f7f8";

export default node;
