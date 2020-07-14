import React from 'react';
import { gql, useQuery } from '@apollo/client';

const getBooksQuery = gql`
 {
   books {
     name
     id
   }
 }
`

function BookList(props) {

  const displayBooks = () => {
    
  }


  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) =>
          <li>{book.name}</li>
        )}
      </ul>
    </div>
  )
}

export default BookList
