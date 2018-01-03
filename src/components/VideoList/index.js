import React from 'react';
import VideoListItem from 'comps/VideoListItem';

const VideoList = ({videos, onVideoSelect}) => {
  return(
    <ul className="col-md-4 list-group">
      {videos.map((video) => {
        return (
          <VideoListItem
            onVideoSelect={onVideoSelect}
            video={video} 
            key={video.etag}
          />
        );
      })}
    </ul>
  );
}

export default VideoList;