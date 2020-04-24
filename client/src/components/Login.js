import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';


class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/auth/login', this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  signup = e => {
    e.preventDefault();
    
    axiosWithAuth()
      .post('/api/auth/register', this.state.credentials)
      .then(res => {
        console.log(res);
        this.props.history.push('/login');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button onClick={this.login}>Log in</button>
          <button onClick={this.signup}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;