import React from 'react';
import { useQuery } from "@apollo/client";
import { getBookQuery } from '../queries/queries';


const BookDetails = ({ bookId }) => {


    const { data, loading, error} = useQuery(getBookQuery, {
        variables: {id: bookId}
    });
    
    return(
        loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        <div>
            <ul id='book-details'>
                <p>Output book details here</p>
                <div>
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <ul className='other-books'>
                        {data.book.author.books.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
            </ul>
        </div>
    )
}

export default BookDetails;

