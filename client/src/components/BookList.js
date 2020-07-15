import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails';

function BookList() {

  const [select, setSelect] = useState({selected: null})

  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // This is NetNinja's function described here:
  // https://www.youtube.com/watch?v=0ew4inhopNM&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=27
  // ...but it never gets used because the new dependency
  // library uses the useQuery hook above that fires off first.
  const displayBooks = () => {
    if(data.loading){
      return(<div>Loading books...</div>)
    } else {
      return data.books
    }
  }

  console.log(select);

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) =>
          <li key ={book.id} onClick={(e) => setSelect({...select, selected: book.id })}>{book.name}</li>
        )}
      </ul>
      <BookDetails bookId={select.selected}/>
    </div>
  )
}

export default BookList
