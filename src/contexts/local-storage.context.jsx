import { createContext, useState } from "react";

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
  const [pageData, setPageData] = useState("{}");
  const [pageDate, setPageDate] = useState("");
  const [randomVideo, setRandomVideo] = useState("");
  const [videoIsCompleted, setVideoIsCompleted] = useState(false);
  const [currentVideoID, setCurrentVideoID] = useState("");
  const [currentVideoStatus, setCurrentVideoStatus] = useState(false);

  const value = {
    pageData,
    setPageData,
    pageDate,
    setPageDate,
    randomVideo,
    setRandomVideo,
    videoIsCompleted,
    setVideoIsCompleted,
    currentVideoID,
    setCurrentVideoID,
    currentVideoStatus,
    setCurrentVideoStatus,
  };

  return (
    <LocalStorageContext.Provider value={value}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export default LocalStorageContext;
