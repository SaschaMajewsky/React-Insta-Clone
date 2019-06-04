import React from 'react';
import './Comment.css';

const Likes = ({likesProperty}) => 
  ( <div className="likes">{likesProperty} likes</div>
  );

/* Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}; */

export default Likes;