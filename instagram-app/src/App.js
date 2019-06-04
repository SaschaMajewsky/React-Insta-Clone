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
      posts: [],
      postsSelected: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = event => {
    this.setState({ postsSelected: this.state.posts.filter(post => {
      if (!post.username.includes(event.target.value)) {return false}
      return post;
      }) 
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchProperty={this.searchPostsHandler} />
        <PostContainer postsProperty={this.state.postsSelected.length > 0 ? this.state.postsSelected : this.state.posts} />
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