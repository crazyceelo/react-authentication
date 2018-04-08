import React from 'react';
import ReactDom from 'react-dom';
// import HomePage from './components/HomePage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

// v1
// ReactDom.render(
//   React.createElement('h1', null, 'Hello from React'),
//   document.getElementById('react-app')
// );

// v2
// ReactDom.render(<HomePage />, document.getElementById('react-app'));

// v3
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
),
  document.getElementById('react-app')
);