import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';


const Comment = ({commentProperty: {username, text}}) => 
  ( <div className="comment-container">
      <span className="username">{username}</span>
      <span className="text"> {text}</span>
    </div>
  );

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
};

export default Comment;