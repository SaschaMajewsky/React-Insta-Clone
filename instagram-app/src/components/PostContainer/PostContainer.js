import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import Post from './Post';

const PostContainer = ({postsProperty}) => 
  ( <div className="container">
      {postsProperty.map(post => 
      <Post postProperty={post} keyProperty={post.timestamp} />)}
    </div>
  );

  PostContainer.propTypes = {
      timestamp: PropTypes.string
  };

export default PostContainer;