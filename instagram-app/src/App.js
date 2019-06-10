import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/LoginPage';
import Authenticate from './components/Authentication/Authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentAuthenticate />
      </div>
    );
  }
}

const ComponentAuthenticate = Authenticate(PostPage)(LoginPage);

export default App;