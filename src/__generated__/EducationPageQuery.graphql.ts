/**
 * @generated SignedSource<<a51abe7391e03f5d0bb18755a5981f1c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EducationPageQuery$variables = Record<PropertyKey, never>;
export type EducationPageQuery$data = {
  readonly getEducationDetails: {
    readonly board_name: string | null | undefined;
    readonly createdAt: string;
    readonly endDate: string;
    readonly fieldOfStudy: string;
    readonly gpa: number | null | undefined;
    readonly instituteLocation: string;
    readonly instituteName: string;
    readonly resume: {
      readonly id: string;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly startDate: string;
    readonly updatedAt: string;
  } | null | undefined;
};
export type EducationPageQuery = {
  response: EducationPageQuery$data;
  variables: EducationPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "aa08cbcc-f8eb-4f14-9fb2-a1b1848adb4f"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "instituteName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "instituteLocation",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fieldOfStudy",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startDate",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endDate",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "board_name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gpa",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Resume",
  "kind": "LinkedField",
  "name": "resume",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EducationPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "EducationDetails",
        "kind": "LinkedField",
        "name": "getEducationDetails",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/)
        ],
        "storageKey": "getEducationDetails(id:\"aa08cbcc-f8eb-4f14-9fb2-a1b1848adb4f\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EducationPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "EducationDetails",
        "kind": "LinkedField",
        "name": "getEducationDetails",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": "getEducationDetails(id:\"aa08cbcc-f8eb-4f14-9fb2-a1b1848adb4f\")"
      }
    ]
  },
  "params": {
    "cacheID": "affa5e6c3ad32c9a4d5a9eb5e0dbfa8d",
    "id": null,
    "metadata": {},
    "name": "EducationPageQuery",
    "operationKind": "query",
    "text": "query EducationPageQuery {\n  getEducationDetails(id: \"aa08cbcc-f8eb-4f14-9fb2-a1b1848adb4f\") {\n    instituteName\n    instituteLocation\n    fieldOfStudy\n    startDate\n    endDate\n    board_name\n    gpa\n    resume {\n      id\n      name\n    }\n    createdAt\n    updatedAt\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "06a663fe23a8b34740a3f4fb64027524";

export default node;
