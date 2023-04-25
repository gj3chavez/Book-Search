import  gql from 'graphql-tag';

export const LOGIN_USER = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
}
        }
    }
`;
