# GraphQL with React and Apollo Sandbox

Left off here:
https://www.youtube.com/watch?v=qU9RiJ_9y_c&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=21
...
But I've re-started to this video here after learning MondoDB
and am on the 4th Lesson in the Series


before starting Lesson 10, here's a Prereq:


Original Git Reop is here:
https://github.com/iamshaunjp/graphql-playlist

## Commands
1.) access the server
    a.) `graphql-react-apollo/server (master) $ nodemon app`
    b.) navigate to: http://localhost:4000/graphql


## Setup Procedures & Housekeeping
1.) Add the .gitignore file from NetNinja:
    https://github.com/iamshaunjp/graphql-playlist/blob/lesson-5/server/.gitignore

2.) Initialize Node.js
    `graphql-react-apollo/server (master) $ npm init`

3.) Install express
    `graphql-react-apollo/server (master) $ npm install express`

4.) Install Nodemon (so you don't have to restart server after every change) globally
    `graphql-react-apollo/server (master) $ npm install nodemon -g`

5.) Install GraphQL and Express-GraphQL
    `graphql-react-apollo/server (master) $ npm install graphql express-graphql`

6.) Install Lodash library to find data & change data
    `graphql-react-apollo/server (master) $ npm install lodash`

7.) Install Mongoose
    `graphql-react-apollo/server (master) $ npm install mongoose`

## Ignoring Login Credentials for the Database
https://gist.githubusercontent.com/koudaiii/54e3c438a85a52c7c368/raw/b36021af966c41fdae0ed815042595569a787e85/gistfile1.txt

Here is how to tell GitHub to ignore a single line of code in a file you don't want made public:

1.) create a `.gitattributes` file in the main directory of your GitHub repo
2.) put `*.js filter=ignoreline` in that `.gitattributes` file
3.) run `git config --global filter.ignoreline.clean "sed '/#ignoreline$/'d"`
4.) run `git config --global filter.ignoreline.smudge cat`
5.) add `#ignoreline` to the end of every line of code you do not want committed to the GitHub repo
