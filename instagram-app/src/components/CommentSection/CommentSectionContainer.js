import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor({comments}) {
    super({comments});
    this.state = {
      comments: comments
    };
  }
  render() {
    return (
      <div className="section-container">
        {this.state.comments.map((comment) => <Comment commentProperty={comment} />)}
        <CommentInput />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
       username: PropTypes.string,
       text: PropTypes.string
    })
  )
};

export default CommentSection;