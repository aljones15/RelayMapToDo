import { graphql } from 'react-relay';

const query = graphql` 
  query GetCity {
    city (id: 1) { 
      id
      lat
    }
  }
`;
