import React from 'react';
import { useMutation, useQuery } from "@apollo/client";
import { getBookQuery } from '../queries/queries';

const BookDetails = () => {

   
    // const [ getBook, { data, loading, error}] = useQuery(getBookQuery, {
    //     valiables: {id}
    // });
    
    return(
        <div>
            <ul id='book-details'>
                <p>Output book details here</p>

            </ul>
        </div>
    )
}

export default BookDetails;

