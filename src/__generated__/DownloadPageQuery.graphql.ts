/**
 * @generated SignedSource<<722b8803460493b28aa899089920961c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DownloadPageQuery$variables = {
  resumeId: string;
};
export type DownloadPageQuery$data = {
  readonly getResume: {
    readonly educationDetails: ReadonlyArray<{
      readonly degree: string;
      readonly endDate: string;
      readonly fieldOfStudy: string;
      readonly instituteLocation: string;
      readonly instituteName: string;
      readonly startDate: string;
    } | null | undefined> | null | undefined;
    readonly personalInfo: {
      readonly email: string | null | undefined;
      readonly firstName: string | null | undefined;
      readonly lastName: string | null | undefined;
      readonly phoneNumber: string | null | undefined;
      readonly photo: string | null | undefined;
      readonly profession: string | null | undefined;
    } | null | undefined;
    readonly projects: ReadonlyArray<{
      readonly description: string | null | undefined;
      readonly projectName: string | null | undefined;
      readonly role: string | null | undefined;
      readonly technologies: ReadonlyArray<string | null | undefined> | null | undefined;
    } | null | undefined> | null | undefined;
    readonly skills: ReadonlyArray<{
      readonly skillName: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly summary: {
      readonly summaryDetails: string;
    } | null | undefined;
    readonly workExperience: ReadonlyArray<{
      readonly company: {
        readonly companyName: string;
      };
      readonly companyAddress: {
        readonly city: string;
        readonly country: string;
      };
      readonly description: string;
      readonly endDate: string;
      readonly jobTitle: string;
      readonly startDate: string;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type DownloadPageQuery = {
  response: DownloadPageQuery$data;
  variables: DownloadPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "resumeId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "resumeId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profession",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phoneNumber",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "photo",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startDate",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endDate",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "WorkExperience",
  "kind": "LinkedField",
  "name": "workExperience",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "jobTitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Company",
      "kind": "LinkedField",
      "name": "company",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "companyName",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Address",
      "kind": "LinkedField",
      "name": "companyAddress",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "city",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "country",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v8/*: any*/),
    (v9/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "instituteName",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "instituteLocation",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "degree",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fieldOfStudy",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summaryDetails",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "Skill",
  "kind": "LinkedField",
  "name": "skills",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "skillName",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "Project",
  "kind": "LinkedField",
  "name": "projects",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "projectName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "role",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "technologies",
      "storageKey": null
    },
    (v10/*: any*/)
  ],
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DownloadPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ResumePreview",
        "kind": "LinkedField",
        "name": "getResume",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonalInfo",
            "kind": "LinkedField",
            "name": "personalInfo",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EducationDetails",
            "kind": "LinkedField",
            "name": "educationDetails",
            "plural": true,
            "selections": [
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Summary",
            "kind": "LinkedField",
            "name": "summary",
            "plural": false,
            "selections": [
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v17/*: any*/),
          (v18/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DownloadPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ResumePreview",
        "kind": "LinkedField",
        "name": "getResume",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonalInfo",
            "kind": "LinkedField",
            "name": "personalInfo",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EducationDetails",
            "kind": "LinkedField",
            "name": "educationDetails",
            "plural": true,
            "selections": [
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Summary",
            "kind": "LinkedField",
            "name": "summary",
            "plural": false,
            "selections": [
              (v16/*: any*/),
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          (v17/*: any*/),
          (v18/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e9664a81371286e23be57b4943728de5",
    "id": null,
    "metadata": {},
    "name": "DownloadPageQuery",
    "operationKind": "query",
    "text": "query DownloadPageQuery(\n  $resumeId: ID!\n) {\n  getResume(id: $resumeId) {\n    personalInfo {\n      firstName\n      lastName\n      profession\n      phoneNumber\n      photo\n      email\n      id\n    }\n    workExperience {\n      jobTitle\n      company {\n        companyName\n      }\n      companyAddress {\n        city\n        country\n      }\n      startDate\n      endDate\n      description\n    }\n    educationDetails {\n      instituteName\n      instituteLocation\n      degree\n      fieldOfStudy\n      startDate\n      endDate\n      id\n    }\n    summary {\n      summaryDetails\n      id\n    }\n    skills {\n      skillName\n    }\n    projects {\n      projectName\n      role\n      technologies\n      description\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2063ffec62e0b86bf0a9bbd5a8001380";

export default node;
