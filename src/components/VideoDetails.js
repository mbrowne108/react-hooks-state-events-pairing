import React, { useState } from 'react'

function VideoDetails(props) {
  let [upvote, setUpvote] = useState(props.upvotes)
  let [downvote, setDownvote] = useState(props.downvotes)

  function handleUpvote() {
    setUpvote(upvote=upvote+1)
  }

  function handleDownvote() {
    setDownvote(downvote=downvote+1)
  }

  return (
    <div className="App">
        <h2>{props.videoTitle}</h2>
        <p>{props.videoViews} Views | Uploaded {props.videoDate}</p>
        <button onClick={handleUpvote}>{upvote} 👍</button>
        <button onClick={handleDownvote}>{downvote} 👎</button>
        <button onClick={props.hideComments}>{props.isView ? "Hide" : "Show"} Comments</button>
    </div>
  );
}

export default VideoDetails;