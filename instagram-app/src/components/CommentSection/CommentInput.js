import React from 'react';
import CommentInputStyled from './../Styles/CommentInputStyled'

const CommentInput = ({submitComment, comment, changeComment}) => 
  ( <form onSubmit={submitComment} className="comment-form">
      <CommentInputStyled className="comment-input" value={comment} onChange={changeComment} type="text" placeholder="Add a comment... " />
    </form>
  );

export default CommentInput;