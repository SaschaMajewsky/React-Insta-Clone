import React from 'react';
import './Login.css';
import {FormGroup, Form, Input, Button } from 'reactstrap';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {this.setState({ [event.target.name]: event.target.value })};

  handleLoginSubmit = event => {
/*     this.setState({
      password: this.hash(this.state.password),
    }) */
    localStorage.setItem('username', this.state.username);
    /* localStorage.setItem('password', this.hash(this.state.password)) */
    localStorage.setItem('password', this.state.password)
    window.location.reload();
  };

  // To make the password approach at least a little bit more sophisticated a hashing function should be used
 /*  hash = (target) => {
    var buffer = crypto.subtle.digest("SHA-256", new TextEncoder().encode(target));
    var chars = Array.prototype.map.call(new Uint8Array(buffer), ch => String.fromCharCode(ch)).join('');
    return btoa(chars);
  }; */

  render() {
    return (
      <div className="page-container">
      <Form className="login-container">
        <div className="first-opener">Login To Experience</div>
        <div className="project-title"></div>
        <FormGroup>
          <Input className="input-username" value={this.state.username} type="text" onChange={this.handleInputChange} placeholder="Username" name="username" autoComplete="off" />
        </FormGroup>
        <FormGroup>
          <Input className="input-password" value={this.state.password} type="password" onChange={this.handleInputChange} placeholder="Password" name="password" autoComplete="off" />
          <br />
          <Button className="button-login" onClick={this.handleLoginSubmit}>Log In </Button>
        </FormGroup>
      </Form>
      </div>
    );

  }
}

export default LoginPage;