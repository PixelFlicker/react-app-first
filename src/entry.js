/**
 * /src/entry.js
 */

//console.log('We are live!');

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App.jsx');

ReactDOM.render(<App />, document.getElementById('my-app'));

module.hot.accept(); // <-- this one.