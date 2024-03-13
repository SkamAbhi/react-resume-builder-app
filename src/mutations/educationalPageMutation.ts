// EducationalPageMutation.js

import { graphql } from 'babel-plugin-relay/macro';

// Define the GraphQL mutation
export const addNewEducationalInfoMutation = graphql`
  mutation educationalPageMutation($input: AddNewEducationInput!) {
    addNewEducation(input: $input) {
      success
      id
    }
  }
`;
