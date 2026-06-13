import React from 'react'

const VideoMedia = ({video}) => {
  return (
    <div className='med' data-v-afd506cc>
      <video
        data-src={video}
        src={video}
        loop
        autoPlay
        muted
        playsInline
        data-v-afd506cc
      ></video>
    </div>
  );
}

export default VideoMedia