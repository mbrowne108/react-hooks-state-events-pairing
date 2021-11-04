import { useState } from 'react'
import video from "../data/video.js";
import CommentHolder from "./CommentHolder.js"
import VideoDetails from "./VideoDetails.js"
import VideoPlayer from "./VideoPlayer.js"

function App() {
  const [isView, setIsView] = useState(true)

  const hideComments = () => {
    setIsView((isView) => !isView)
  }

  return (
    <div className="App">
      <VideoPlayer videoLink={video.embedUrl}/>
      <VideoDetails videoTitle={video.title} videoViews={video.views} videoDate={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} hideComments={hideComments} isView={isView}/>
      {isView ? <CommentHolder commentsNumber={video.comments.length} /> : null}
    </div>
  );
}

export default App;
