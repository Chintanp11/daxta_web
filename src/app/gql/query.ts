import { gql } from 'apollo-angular';

export const LOGIN = gql`
mutation($ContactUsForm: ContactUsForm!) {
    submitContactForm(input: $ContactUsForm)
  }
`;


export const SUBSCRIBE = gql`
mutation($email: String!) {
  submitDaxtaNewsletter(email: $email)
  }
`;

