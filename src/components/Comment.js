import React, { useState } from 'react'

function Comment(props) {
  let [upvote, setCommentUpvote] = useState(0)
  let [downvote, setCommentDownvote] = useState(0)

  function handleUpvote() {
    setCommentUpvote(upvote=upvote+1)
  }

  function handleDownvote() {
    setCommentDownvote(downvote=downvote+1)
  }

  return (
    <div className="App">
      <h4>{props.commentUser}</h4>
      <p>{props.comment}</p>
      <button onClick={handleUpvote}>{upvote} 👍</button>
      <button onClick={handleDownvote}>{downvote} 👎</button>
    </div>
  );
}

export default Comment;