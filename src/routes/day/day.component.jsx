import { useContext } from "react";
import { useParams } from "react-router";

import VideoContext from "../../contexts/video.context";

import { Video } from "./day.styles";

import videoList from "../../utils/videoList.utils";
import pickRandomVideo from "../../utils/videoPicker.utils";

import { Title, Wrapper } from "./day.styles";
import { useEffect } from "react";

const Day = () => {
  const { day } = useParams();
  const pageDate = day.replaceAll("-", "/");

  useContext(VideoContext);

  const onEndedHandler = () => {
    console.log("Video Ended!");
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Wrapper>
        <Title>{pageDate}</Title>
        <Video
          title="Youtube Video Player"
          videoId="8PhdfcX9tG0"
          onEnd={onEndedHandler}
        ></Video>
      </Wrapper>
    </div>
  );
};

export default Day;
