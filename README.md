# GraphQL with React and Apollo Sandbox

Left off here:
https://www.youtube.com/watch?v=Rvx1HLMK1-U&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=35
...
on 3:20 / 11:25
... Should probably watch different videos that deal specifically with how to use `useQuery` instead of finishing this NetNinja video.  The problem: NetNinja's libraries are old, outdated, use class components in React, and pre-date the newer, better: `useQuery` functionality.  Now that there's a database up & running w/ a React frontend (in this very sandbox) the NetNinja video series is not as useful.

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

8.) Apollo Server Installed

9.) Install Cors
    `graphql-react-apollo/server (master) $ npm install cors --save`


## Ignoring Login Credentials for the Database
https://gist.githubusercontent.com/koudaiii/54e3c438a85a52c7c368/raw/b36021af966c41fdae0ed815042595569a787e85/gistfile1.txt

Here is how to tell GitHub to ignore a single line of code in a file you don't want made public:

1.) create a `.gitattributes` file in the main directory of your GitHub repo
2.) put `*.js filter=ignoreline` in that `.gitattributes` file
3.) run `git config --global filter.ignoreline.clean "sed '/#ignoreline$/'d"`
4.) run `git config --global filter.ignoreline.smudge cat`
5.) add `#ignoreline` to the end of every line of code you do not want committed to the GitHub repo
