import { graphql } from 'babel-plugin-relay/macro';

export const addNewWorkExperienceAndCompanyAndCompanyAddress = graphql`
  mutation workExpPageMutation( $input: AddNewWorkExperienceAndCompanyAndCompanyAddressInput!) {
    addNewWorkExperienceAndCompanyAndCompanyAddress(input: $input) {
      success
      companyId
      companyAddressId
      workExperienceId
    }
  }
`;
