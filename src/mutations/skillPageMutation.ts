import { graphql } from 'babel-plugin-relay/macro';

// Define the GraphQL mutation
export const addNewSkillMutation = graphql`
  mutation skillPageMutation($input: AddNewSkillInput!) {
    addNewSkill(input: $input) {
      success 
      id
    }
  }
`;
