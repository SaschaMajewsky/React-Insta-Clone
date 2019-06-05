import React from 'react';
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBarContainer';

class PostPage extends React.Component {
  constructor(usernameProperty) {
  super();
  this.state = {
      posts: [],
      postsSelected: [],
      currentUser: usernameProperty
  };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  seeOnlyHeartedPosts = event => {
    this.setState({ postsSelected: this.state.posts.filter(post => {
        if (localStorage.getItem(post.id + "_isLiked") === "false") {return false}
        return post;
        }) 
    });
  };

  seeAllPosts = event => {
    console.log('Doing stuff')
    this.setState({ postsSelected: ""});
  };

  searchPostsHandler = event => {
    this.setState({ postsSelected: this.state.posts.filter(post => {
        if (!post.username.includes(event.target.value)) {return false}
        return post;
        }) 
    });
  };

  logMeOut = event => {
    event.preventDefault();
    localStorage.setItem('username', "")
    localStorage.setItem('password', "")
    window.location.reload();
  }

  render() {
  return (
      <div className="App">
      <SearchBar searchProperty={this.searchPostsHandler} seeOnlyHeartedPostsProperty={this.seeOnlyHeartedPosts} seeAllPostsProperty={this.seeAllPosts} logMeOutProperty={this.logMeOut}/>
      <PostContainer postsProperty={this.state.postsSelected.length > 0 ? this.state.postsSelected : this.state.posts} usernameProperty={this.state.currentUser} />
      </div>
  );
}
}

PostPage.propTypes = {
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

export default PostPage;