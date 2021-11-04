import React from 'react'

function VideoPlayer({videoLink}) {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={videoLink}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
}

export default VideoPlayer;