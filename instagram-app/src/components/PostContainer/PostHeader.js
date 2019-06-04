import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const PostHeader = ({thumbnailUrlProperty, usernameProperty}) => 
  ( <div className="postheader-container">
      <img className="profile-thumbnail" src={thumbnailUrlProperty} alt="The thumbnail of the content creator profile." />
      <div className="profile-name">{usernameProperty}</div>
    </div>
  );

  PostHeader.propTypes = {
    thumbnailUrlProperty: PropTypes.string,
    usernameProperty: PropTypes.string
  };

export default PostHeader;