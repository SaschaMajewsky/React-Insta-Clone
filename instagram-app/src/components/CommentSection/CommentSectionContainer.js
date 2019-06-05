import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Interactions from './Interactions';
import Likes from './Likes';

class CommentSection extends React.Component {
  constructor({commentsProperty, likesProperty, iDProperty, usernameProperty}) {
    super();
    this.state = {
      id: iDProperty,
      likes: likesProperty,
      comments: commentsProperty,
      isLiked: false,
      comment: '',
      currentUser: usernameProperty
    };
  }

  componentDidMount = () => {
    localStorage.getItem(this.state.id) ? this.setState({ comments: JSON.parse(localStorage.getItem(this.state.id)) }) : this.setComments()
    localStorage.getItem(this.state.id + "_likes") ? this.setState({ likes: JSON.parse(localStorage.getItem(this.state.id + "_likes")) }) : this.setLikes()
    localStorage.getItem(this.state.id + "_isLiked") ? this.setState({ isLiked: JSON.parse(localStorage.getItem(this.state.id + "_isLiked")) }) : this.setLikes()
  };

  componentWillUnmount = () => (this.setComments());
  
  setComments = () => (localStorage.setItem(this.state.id, JSON.stringify(this.state.comments)));

  setLikes = () => {
    localStorage.setItem(this.state.id + "_likes", JSON.stringify(this.state.likes))
    localStorage.setItem(this.state.id + "_isLiked", JSON.stringify(this.state.isLiked))
  };

  incrementLikes = () => {
    this.setState({
      isLiked: !this.state.isLiked,
      likes: this.state.likes + 1 })
    localStorage.setItem(this.state.id + "_likes", JSON.stringify(this.state.likes + 1))
    localStorage.setItem(this.state.id + "_isLiked", JSON.stringify(!this.state.isLiked))
  };

  decrementLikes = () => {
    this.setState({
      isLiked: !this.state.isLiked,
      likes: this.state.likes - 1 })
      localStorage.setItem(this.state.id + "_likes", JSON.stringify(this.state.likes - 1))
    localStorage.setItem(this.state.id + "_isLiked", JSON.stringify(!this.state.isLiked))
  };

  commentHandler = event => (this.setState({ comment: event.target.value }));

  handleCommentSubmit = event => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({ id: this.getLastPostId() + 1, text: this.state.comment, username: this.state.currentUser.usernameProperty });
    this.setState({ comments, comment: '' });
    setTimeout(() => { this.setComments() }, 500);
  };
  
  setLiked = () => {
      !this.state.isLiked ? this.incrementLikes() : this.decrementLikes();
     };

  deleteComment = (id) => {
    this.setState({ comments: this.state.comments.filter(comment => {
    if(comment.id === id) {return false}
      return comment;
    })
    })
    localStorage.setItem(this.state.id, JSON.stringify(this.state.comments.filter(comment => {
      if(comment.id === id) {return false}
        return comment;
      })))
  }; 

  getLastPostId = () => {
    let lastId = 0;
    this.state.comments.forEach(comment => {
      if(comment.id > lastId) {lastId = comment.id}
    })
    return lastId;
  }

  render() {
    return (
      <div className="section-container">
        <Interactions setLikeProperty={this.setLiked} isLikedProperty={this.state.isLiked} iDProperty={this.id} />
        <Likes likesProperty={this.state.likes} />
        {this.state.comments.map((comment, id) => <Comment commentProperty={comment} deleteCommentProperty={this.deleteComment} usernameProperty={this.state.currentUser.usernameProperty} key={id}/>)}
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