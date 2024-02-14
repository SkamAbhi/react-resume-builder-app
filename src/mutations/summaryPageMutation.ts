import { graphql } from 'babel-plugin-relay/macro';

export const addNewSummaryMutation = graphql`
  mutation summaryPageMutation($input: AddNewSummaryInput!){
    addNewSummary(input: $input) {
      id
      success
    }
  }
`;
