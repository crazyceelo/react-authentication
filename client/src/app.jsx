import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/HomePage.jsx';

// ReactDom.render(
//   React.createElement('h1', null, 'Hello from React'),
//   document.getElementById('react-app')
// );

ReactDom.render(<HomePage />, document.getElementById('react-app'));