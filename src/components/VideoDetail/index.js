import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div className="video-detail col-md-8">Loading...</div>;
  }
  const vid = video.snippet;
  const vidUrl = `http://youtube.com/embed/${video.id.videoId}`;
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={vidUrl}></iframe>
      </div>
      
      <div className="details">
        <div>{vid.title}</div>
        <div>{vid.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;