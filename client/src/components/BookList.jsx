import React from 'react';
import { useQuery } from "@apollo/client";
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';


const BookList = () => {

    const {loading, error, data} = useQuery(getBooksQuery);
    
    return(
        <div>
            <ul id='book-list'>
                {
                    loading ? (<div>Loading books...</div>) :
                    error ? (<div>{error}</div>) :
                    data.books.map(book => {
                        return <li key={book.id}>{book.name}<br/><BookDetails/></li>
                    })
                   
                }
            </ul>
        </div>
    )
}

export default BookList;