

import { graphql } from 'babel-plugin-relay/macro';

// Define the GraphQL mutation
export const addNewProjectInfoMutation = graphql`
  mutation projectPageMutation($input: AddNewProjectInput!) {
    addNewProject(input: $input) {
      success 
      id

    }
  }
`;

