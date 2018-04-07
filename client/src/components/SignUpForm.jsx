import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// this might need a return?
const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
    <MuiThemeProvider>
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Login</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <TextField
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </div>

        <div>
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div className="button-line">
          <RaisedButton
            type="submit"
            label="Log in"
            primary
          />
        </div>
        
        <CardText>
          Don't have an account?
          <Link to={'/signup'}>
            Create one
          </Link>
        </CardText>
      </form>
    </MuiThemeProvider>
  );

LoginForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
