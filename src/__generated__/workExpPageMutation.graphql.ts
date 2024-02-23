/**
 * @generated SignedSource<<f4ce41d1c08ce5851b4bc7ac96de275c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddNewWorkExperienceAndCompanyAndCompanyAddressInput = {
  companyAddressId?: string | null | undefined;
  companyCity?: string | null | undefined;
  companyCountry?: string | null | undefined;
  companyId?: string | null | undefined;
  companyName?: string | null | undefined;
  endDate?: string | null | undefined;
  jobTitle?: string | null | undefined;
  resumeId: string;
  startDate?: string | null | undefined;
};
export type workExpPageMutation$variables = {
  input: AddNewWorkExperienceAndCompanyAndCompanyAddressInput;
};
export type workExpPageMutation$data = {
  readonly addNewWorkExperienceAndCompanyAndCompanyAddress: {
    readonly companyAddressId: string | null | undefined;
    readonly companyId: string | null | undefined;
    readonly success: boolean | null | undefined;
    readonly workExperienceId: string | null | undefined;
  };
};
export type workExpPageMutation = {
  response: workExpPageMutation$data;
  variables: workExpPageMutation$variables;
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
    "concreteType": "AddNewWorkExperienceAndCompanyAndCompanyAddressPayload",
    "kind": "LinkedField",
    "name": "addNewWorkExperienceAndCompanyAndCompanyAddress",
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
        "name": "companyId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "companyAddressId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "workExperienceId",
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
    "name": "workExpPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "workExpPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b0effa3c5901b43cb10544fc0fedc68d",
    "id": null,
    "metadata": {},
    "name": "workExpPageMutation",
    "operationKind": "mutation",
    "text": "mutation workExpPageMutation(\n  $input: AddNewWorkExperienceAndCompanyAndCompanyAddressInput!\n) {\n  addNewWorkExperienceAndCompanyAndCompanyAddress(input: $input) {\n    success\n    companyId\n    companyAddressId\n    workExperienceId\n  }\n}\n"
  }
};
})();

(node as any).hash = "d91f9f8c2f4ae06f736dc7ba1a55d94e";

export default node;
