import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';

const Post = ({postProperty: {username, thumbnailUrl, imageUrl, comments}}) => 
  ( <div className="post-container">
      <PostHeader usernameProperty={username} thumbnailUrlProperty={thumbnailUrl}/>
      <img className="post-image" src={imageUrl} alt="A preview of the post." />
      <CommentSection comments={comments} />
    </div>
  );

  Post.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  };

export default Post;