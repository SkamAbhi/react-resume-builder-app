// ResumePageMutation.js

import { graphql } from 'babel-plugin-relay/macro';

// Define the GraphQL mutation
export const addNewResumeMutation = graphql`
mutation resumeIdMutation($input: AddNewResumeInput!) {
    addNewResume(input: $input) {
      success 
      id

    }
  }
`;

