import React, { useState } from 'react'
import video from "../data/video.js";
import Comment from "./Comment.js"

function CommentHolder(props) {
  let [userSearch, setUserSearch] = useState('')
  let comments = video.comments.map((comment) => {
    if (comment.user.includes(userSearch) || userSearch === '') {
        return <Comment key={comment.id} commentUser={comment.user} comment={comment.comment}/>
    } else {
        console.log('Nobody!')
    }
  })

  function handleUserSearch(e) {
    setUserSearch(e.target.value)
    console.log(userSearch)
  }

  return (
    <div className="App">
      <input type="text" placeholder="Search Usernames..." onChange={handleUserSearch} value={userSearch}/>
      <h3>{props.commentsNumber} Comments</h3>
      {comments}
    </div>
  );
}

export default CommentHolder;