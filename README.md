ChattyApp 
=====================

ChattyApp is a client-side single-page application that allows multiple users to chat with each other. Users are able to set their username and chat in real-time through through the Websocket server.

### Getting Started

Fork and Clone this repo.

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the client side using the `npm start` command. The app will be served at <http://localhost:3000/>
4. Start the server side using the `npm start` command. This should be done from the chatty_server folder.
5. Go to <http://localhost:3000/> in your browser.

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Linting

This repo includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* ReactJS
* Websockets
* SASS
* UUID
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Screenshot 
! [Screenshot of ChattyApp] (https://github.com/adrianaj24/chattyApp/blob/master/screenshot/ChattyApp.png)
