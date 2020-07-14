// temp file to organize GraphiQL outputs

// ID = 5f0dfca90e2439305e62222e
mutation {
  addAuthor(name: "Patrick Rothfuss", age: 44){
    name
    age
  }
}

// ID = 5f0dfcb50e2439305e62222f
mutation {
  addAuthor(name: "Brandon Sanderson", age: 42){
    name
    age
  }
}

// ID = 5f0dfcbd0e2439305e622230
mutation {
  addAuthor(name: "Terrry Pratchett", age: 66){
    name
    age
  }
}

mutation {
  addBook(name: "Name of the Wind", genre: "Fantasy", authorId: "5f0dfca90e2439305e62222e"){
    name
    genre
  }
}

mutation {
  addBook(name: "The Final Empire", genre: "Fantasy", authorId: "5f0dfcb50e2439305e62222f"){
    name
    genre
  }
}

mutation {
  addBook(name: "The Long Earth", genre: "Fantasy", authorId: "5f0dfcbd0e2439305e622230"){
    name
    genre
  }
}

mutation {
  addBook(name: "The Hero of Ages", genre: "Fantasy", authorId: "5f0dfcb50e2439305e62222f"){
    name
    genre
  }
}

mutation {
  addBook(name: "The Color of Magic", genre: "Fantasy", authorId: "5f0dfcbd0e2439305e622230"){
    name
    genre
  }
}

mutation {
  addBook(name: "The Light Fantastic", genre: "Fantasy", authorId: "5f0dfcbd0e2439305e622230"){
    name
    genre
  }
}

// this will query the db and return all books:
{
  books{
    name
    genre
    author {
      name
      age
    }
  }
}

// this will query the db and return a book:
{
  book(id: "5f0dff1b0e2439305e622232") {
    name
    genre
  }
}

// this will query the db and return an author:
{
  author(id: "5f0dfcb50e2439305e62222f") {
    name
    age
    books {
      name
    }
  }
}
