
import React, { useRef } from "react";
import videoo from '../src/video/gym video.mp4'

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="videoplay">
      
      <video
        ref={videoRef}
        controls
      >
        <source src={videoo}  />
      </video>
     

     <div className="buttonback"> 
     < button onClick={handlePlay}>play video</button>
        <a className="button11"  href="/"><button >go back</button></a>
     </div>
    </div>
  );
};

export default VideoPlayer;
