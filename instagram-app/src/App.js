import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer postsProperty={this.state.posts} />
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
       username: PropTypes.string,
       thumbnailUrl: PropTypes.string,
       imageUrl: PropTypes.string,
       likes: PropTypes.number,
       timestamp: PropTypes.string,
       comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          username: PropTypes.string,
          text: PropTypes.string
        })
       )
    })
  )
};

export default App;