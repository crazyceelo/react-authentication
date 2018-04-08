import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// this might need a return?
// this might need the mui theme provider
const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">React App</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>

    {/* 
    The children object will be passed as a prop
    by a router that we will configure later  
    */}

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;