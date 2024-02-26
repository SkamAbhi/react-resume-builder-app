import { graphql } from "babel-plugin-relay/macro";

// Define the GraphQL mutation
export const DeleteProjectDetailsMutation = graphql`
  mutation deleteProjectDetailsMutation($input: DeleteProjectInput!) {
    deleteProjectDetails(input: $input) {
      success
    }
  }
`;
