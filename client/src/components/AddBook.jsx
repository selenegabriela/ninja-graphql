import React from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { useState } from 'react';


const AddBook = () => {
    const {loading, error, data} = useQuery(getAuthorsQuery);
    const [ addBook, { data: dataAddBook}] = useMutation(addBookMutation);
    // Todo: update the list books

    
    const [ input, setInput ] = useState({
        name: '',
        genre: '',
        authorId: '',
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ variables: { name: input.name, genre: input.genre, authorId: input.authorId } });
    }

    
    return(
        <form id="add-book" onSubmit={e => handleSubmit(e)}>

            <div className="field">
            <label>Book name:</label>
            <input name='name' type="text" onChange={e => handleChange(e)}/>
            </div>
            
            <div className="field">
            <label>Genre:</label>
            <input name='genre' type="text" onChange={e => handleChange(e)}/>
            </div>

            <div className="field">
            <label>Author:</label>
            <select name='authorId' onChange={e => handleChange(e)}>
                <option>Select Author</option>
                {
                    loading ? (<option disabled>Loading authors...</option>) :
                    error ? (<option disabled>{error}</option>) :
                    data.authors.map(author => {
                        return (<option key={author.id} value={author.id}>{author.name}</option>)
                    })
                }
            </select>
            </div>

            <button>+</button>

      </form>
    )
}

export default AddBook;