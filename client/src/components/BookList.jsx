import React from 'react';
import {useQuery, gql} from "@apollo/client";
import { useEffect } from 'react';

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

const BookList = () => {

    const {loading, error, data} = useQuery(getBooksQuery);
    
    
    
    return(
        <div>
            <ul id='book-list'>
                {
                    loading ? (<div>Loading books...</div>) :
                    error ? (<div>{error}</div>) :
                    data.books.map(book => {
                        return <li key={book.id}>{book.name}</li>
                    })
                   
                }
            </ul>
        </div>
    )
}

export default BookList;