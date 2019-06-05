import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';


const Comment = ({commentProperty: {id, username, text}, deleteCommentProperty, usernameProperty}) => 
  ( <div className="comment-container">
      <span className="username">{username}</span>
      <span className="text"> {text}</span>
      <span onClick={() => { deleteCommentProperty(id)}} className={username === usernameProperty ? "comment-deleteable" : ""}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </div>
  );

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
};

export default Comment;