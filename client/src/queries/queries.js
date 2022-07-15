import { gql } from "@apollo/client";

export const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`
export const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`
export const addBookMutation = gql`
mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
}
`
export const getBookQuery = gql`
    query($id: ID!){
        book(id: $id){
            name
            genre
            id
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`