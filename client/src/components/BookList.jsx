import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';


const BookList = () => {

    const {loading, error, data} = useQuery(getBooksQuery);
    const [ selected, setSelected ] = useState(null);
    
    return(
        <div>
            <ul id='book-list'>
                {
                    loading ? (<div>Loading books...</div>) :
                    error ? (<div>{error}</div>) :
                    data.books.map(book => {
                        return <li onClick={()=>setSelected(book.id)}key={book.id}>{book.name}<br/></li>
                    })
                   
                }
            </ul>
            {selected ? <BookDetails bookId={selected}/> : <div>No book selected</div>}
        </div>
    )
}

export default BookList;