import { graphql } from 'react-relay';

const city = graphql`
  fragment Cities_city on City {
    id
  }
`;
