/**
 * @generated SignedSource<<2a3d69d1cbb8fbfc2a830cecb28d32f0>>
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
    readonly education: {
      readonly degree: string;
      readonly description: string;
      readonly endDate: string;
      readonly fieldOfStudy: string;
      readonly id: string;
      readonly instituteLocation: string;
      readonly instituteName: string;
      readonly startDate: string;
    } | null | undefined;
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
        "concreteType": "EducationDetails",
        "kind": "LinkedField",
        "name": "education",
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
            "name": "instituteName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "instituteLocation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "degree",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fieldOfStudy",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          }
        ],
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
    "cacheID": "6e07b5c74f54269a717969a4b408b6aa",
    "id": null,
    "metadata": {},
    "name": "educationalPageMutation",
    "operationKind": "mutation",
    "text": "mutation educationalPageMutation(\n  $input: AddNewEducationInput!\n) {\n  addNewEducation(input: $input) {\n    success\n    education {\n      id\n      instituteName\n      instituteLocation\n      degree\n      fieldOfStudy\n      startDate\n      endDate\n      description\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "050abd94fc0d131f2ad8b22aaa64fc26";

export default node;
