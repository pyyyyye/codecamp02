// ======= 중고마켓 회원가입 | market signup queries =======

import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;
