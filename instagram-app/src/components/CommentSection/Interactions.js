import React from 'react';
import './Comment.css';

const Interactions = ({setLikeProperty, isLikedProperty}) => 
  ( <div className="interactions-container">
      <div onClick={setLikeProperty} className={isLikedProperty ? "interaction-heart filled" : "interaction-heart"}></div>
      <div className="interaction-quote"></div>
    </div>
  );

/* Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}; */

export default Interactions;