// PersonalPageMutation.js

import { graphql } from 'babel-plugin-relay/macro';

// Define the GraphQL mutation
export const addNewPersonalInfoMutation = graphql`
 mutation personalPageMutation($input: AddNewPersonalInfoAndAddressInput!) {
    addNewPersonalInfoAndAddress(input: $input) {
      success
      personalInfoId
      personalAddressId
    }
  }
`;


