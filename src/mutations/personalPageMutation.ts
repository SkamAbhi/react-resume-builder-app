// PersonalPageMutation.js

import { graphql } from 'babel-plugin-relay/macro';

// Define the GraphQL mutation
export const addNewPersonalInfoMutation = graphql`
  mutation personalPageMutation($input: AddNewPersonalInfoInput!) {
    addNewPersonalInfo(input: $input) {
      success 
    
    }
  }
`;

