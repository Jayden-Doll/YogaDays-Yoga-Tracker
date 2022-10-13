import { createContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState("");
  const [videoIsCompleted, setVideoIsCompleted] = useState(false);

  const value = { video, setVideo, videoIsCompleted, setVideoIsCompleted };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

export default VideoContext;
