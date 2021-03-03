import { gql } from '@apollo/client';

export const GET_CONFIGURATION = gql`
  query Configuration {
    configuration {
      images {
        base_url
        secure_base_url
        backdrop_sizes
        logo_sizes
        poster_sizes
        profile_sizes
        still_sizes
      }
      change_keys
    }
  }
`;
