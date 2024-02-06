// EducationalPageMutation.js

import { graphql } from 'babel-plugin-relay/macro';

// Define the GraphQL mutation
export const updateEducationalInfoMutation = graphql`
  mutation educationalPageMutation($input: AddNewEducationInput!) {
    addNewEducation(input: $input) {
      success
      education {
        id
        instituteName
        instituteLocation
        degree
        fieldOfStudy
        startDate
        endDate
        description
      }
    }
  }
`;
