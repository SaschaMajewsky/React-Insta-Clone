import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Interactions from './Interactions';
import Likes from './Likes';

class CommentSection extends React.Component {
  constructor({commentsProperty, likesProperty, iDProperty}) {
    super();
    this.state = {
      id: iDProperty,
      likes: likesProperty,
      comments: commentsProperty,
      isLiked: false,
      comment: ''
    };
  }

  componentDidMount = () => (localStorage.getItem(this.state.id) ? this.setState({ comments: JSON.parse(localStorage.getItem(this.state.id)) }) : this.setComments());

  componentWillUnmount = () => (this.setComments());
  
  setComments = () => (localStorage.setItem(this.state.id, JSON.stringify(this.state.comments)));

  commentHandler = event => (this.setState({ comment: event.target.value }));

  handleCommentSubmit = event => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({ text: this.state.comment, username: 'guest' });
    this.setState({ comments, comment: '' });
    setTimeout(() => { this.setComments() }, 500);
  };

  setLiked = () => (this.setState({ isLiked: !this.state.isLiked, likes: this.state.isLiked ? this.state.likes - 1 : this.state.likes + 1 }));

  render() {
    return (
      <div className="section-container">
        <Interactions setLikeProperty={this.setLiked} isLikedProperty={this.state.isLiked} iDProperty={this.id} />
        <Likes likesProperty={this.state.likes} />
        {this.state.comments.map((comment, id) => <Comment commentProperty={comment} key={id}/>)}
        <CommentInput comment={this.state.comment} submitComment={this.handleCommentSubmit} changeComment={this.commentHandler}/>
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