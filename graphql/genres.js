import { gql } from '@apollo/client';

export const GET_GENRES_BY_MEDIA_TYPE = gql`
  query GenresByMediaType {
    genresByMediaType {
      movieGenres {
        id
        name
      }
      tvGenres {
        id
        name
      }
    }
  }
`;
