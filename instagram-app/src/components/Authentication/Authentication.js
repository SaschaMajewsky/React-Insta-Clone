import React from 'react';

const Authenticate = PostPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false
      };
    }
    componentDidMount() {
     localStorage.getItem('username') ? localStorage.getItem('username') === 'sascha' && localStorage.getItem('password') === 'test' ? this.setState({ authenticated: true }) : this.setState({ authenticated: false }) : this.setState({ authenticated: false })
    }
    render() {
      return this.state.authenticated ? <PostPage usernameProperty={localStorage.getItem('username')} /> : <LoginPage />;
    }
  };

export default Authenticate;