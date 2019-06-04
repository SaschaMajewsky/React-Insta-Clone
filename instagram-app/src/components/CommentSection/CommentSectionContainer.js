import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Interactions from './Interactions';
import Likes from './Likes';

class CommentSection extends React.Component {
  constructor({commentsProperty, likesProperty}) {
    super({commentsProperty, likesProperty});
    this.state = {
      likes: likesProperty,
      comments: commentsProperty
    };
  }
  render() {
    return (
      <div className="section-container">
        <Interactions />
        <Likes likesProperty={this.state.likes} />
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