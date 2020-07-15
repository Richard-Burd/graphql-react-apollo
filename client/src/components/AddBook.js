import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

function AddBook() {
  // this maybe should be deleted
  const [book, setBook] = useState({authorId: '', name: '', genre: ''})

  const [addBookMut, { dataMutation }] = useMutation(addBookMutation);

  const { loading, error, data } = useQuery(
    getAuthorsQuery,
    addBookMutation
  );

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const displayAuthors = () => {
    return data.authors.map(author => {
      return( <option key={ author.id } value={author.id}>{ author.name }</option> );
    });
  }

  const submitForm = (e) => {
    e.preventDefault()
    // console.log(book);
    addBookMut({
     variables: {
       name: book.name,
       genre: book.genre,
       authorId: book.authorId,
     },

     // https://www.apollographql.com/docs/react/data/mutations/
     // this rerenders the books to show the one just added
     refetchQueries: [{query: getBooksQuery}]
   });
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => setBook({...book, name: e.target.value})} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => setBook({...book, genre: e.target.value})}/>
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setBook({...book, authorId: e.target.value})}>
          <option>Select author</option>
          { displayAuthors() }
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook
