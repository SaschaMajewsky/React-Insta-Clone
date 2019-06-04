import React from 'react';

const CommentInput = ({submitComment, comment, changeComment}) => 
  ( <form onSubmit={submitComment} className="comment-form">
      <input className="comment-input" value={comment} onChange={changeComment} type="text" placeholder="Add a comment... " />
    </form>
  );

export default CommentInput;