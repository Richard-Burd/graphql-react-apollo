import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries'

// left off here trying to build out this component while watching this:
// https://www.youtube.com/watch?v=Rvx1HLMK1-U&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=35
// ...left off on 3:20 / 11:25 ... see README for more details
function BookDetails(props) {

  // I really need to watch some other videos that show specifically how to use useQuery
  const { loading, error, data } = useQuery(getBookQuery);

  //if (loading) return 'Loading...';
  //if (error) return `Error! ${error.message}`;

  return (
    <div id="book-details">
      <p>Id of book selected: {props.bookId}</p>
    </div>
  )
}

export default BookDetails
