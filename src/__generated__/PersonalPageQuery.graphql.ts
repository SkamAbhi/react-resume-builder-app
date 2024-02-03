/**
 * @generated SignedSource<<7866a4a687cc1610411bfc099ee92756>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PersonalPageQuery$variables = Record<PropertyKey, never>;
export type PersonalPageQuery$data = {
  readonly getAllPersonalInfo: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly birthdate: string | null | undefined;
        readonly email: string | null | undefined;
        readonly firstName: string | null | undefined;
        readonly id: string;
        readonly lastName: string | null | undefined;
        readonly middleName: string | null | undefined;
        readonly personalAddress: {
          readonly city: string | null | undefined;
          readonly country: string | null | undefined;
          readonly state: string | null | undefined;
          readonly street: string | null | undefined;
          readonly zipcode: string | null | undefined;
        } | null | undefined;
        readonly profession: string | null | undefined;
        readonly resume: {
          readonly id: string;
          readonly name: string | null | undefined;
          readonly user: {
            readonly email: string | null | undefined;
            readonly id: string;
            readonly name: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type PersonalPageQuery = {
  response: PersonalPageQuery$data;
  variables: PersonalPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PersonalInfoConnection",
    "kind": "LinkedField",
    "name": "getAllPersonalInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PersonalInfoEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonalInfo",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "firstName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "middleName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "birthdate",
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "profession",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Address",
                "kind": "LinkedField",
                "name": "personalAddress",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "street",
                    "storageKey": null
                  },
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
                    "name": "state",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "country",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "zipcode",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Resume",
                "kind": "LinkedField",
                "name": "resume",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v2/*: any*/),
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PersonalPageQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PersonalPageQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a96ef089d0340bf20baf7df41124cf20",
    "id": null,
    "metadata": {},
    "name": "PersonalPageQuery",
    "operationKind": "query",
    "text": "query PersonalPageQuery {\n  getAllPersonalInfo {\n    edges {\n      node {\n        id\n        firstName\n        middleName\n        lastName\n        birthdate\n        email\n        profession\n        personalAddress {\n          street\n          city\n          state\n          country\n          zipcode\n        }\n        resume {\n          id\n          name\n          user {\n            id\n            name\n            email\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ac20aac5c775e09dbae6438ff9db0188";

export default node;
