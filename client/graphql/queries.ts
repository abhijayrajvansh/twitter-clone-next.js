import { gql } from "@apollo/client";

export const generateSignedToken = gql`
  query Query($token: String!) {
    generateSignedToken(token: $token)
  }
`