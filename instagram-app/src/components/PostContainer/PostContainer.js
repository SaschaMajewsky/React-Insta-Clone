import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import Post from './Post';

const PostContainer = ({postsProperty, usernameProperty}) => 
  ( <div className="container">
      {postsProperty.map(post => 
      <Post postProperty={post} key={post.timestamp} usernameProperty={usernameProperty} />)}
    </div>
  );

  PostContainer.propTypes = {
      timestamp: PropTypes.string
  };

export default PostContainer;