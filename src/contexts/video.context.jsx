import { createContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState("");
  const [videoIsCompleted, setVideoIsCompleted] = useState(false);

  return <VideoContext.Provider value={{}}>{children}</VideoContext.Provider>;
};

export default VideoContext;
