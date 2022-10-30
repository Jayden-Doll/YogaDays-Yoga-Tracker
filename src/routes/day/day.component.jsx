import { useContext, useEffect } from "react";
import { useParams } from "react-router";

import LocalStorageContext from "../../contexts/local-storage.context";

import {
  Video,
  AngleLeftIcon,
  Title,
  Wrapper,
  VideoContainer,
  InfoWrapper,
  Status,
  StatusWrapper,
  IncompleteIcon,
  CompleteIcon,
  ButtonContainer,
  ButtonText,
  BackButton,
  ButtonLink,
} from "./day.styles";

import videoList from "../../utils/videoList.utils";
import pickRandomVideo from "../../utils/videoPicker.utils";

const Day = () => {
  const { day } = useParams();
  const pageDateText = day.replaceAll("-", "/");
  const pageDateID = day.replaceAll("-", "");

  const localStorage = window.localStorage;

  const {
    randomVideo,
    setRandomVideo,
    pageDate,
    setPageDate,
    setPageData,
    currentVideoID,
    setCurrentVideoID,
    currentVideoStatus,
    setCurrentVideoStatus,
  } = useContext(LocalStorageContext);

  const onVideoEndHandler = () => {
    setCurrentVideoStatus(true);
    updateVideoStatus(currentVideoID);
  };

  const updateVideoStatus = (randomVideoID) => {
    const parsedData = getParsedLocalStorageData();
    const newPageDataObject = JSON.stringify({
      ...parsedData,
      [pageDate]: {
        VIDEO_ID: randomVideoID,
        VIDEO_STATUS: true,
      },
    });

    setPageData(newPageDataObject);

    localStorage.setItem("PAGE_DATA_STORE", newPageDataObject);
  };

  //On load (no ID in LS from pageDateID): get data from LS -> set data from LS to pageData -> get random num -> set random num and status -> make new object from data -> set page data to object -> push changes to LS

  //On load (ID in LS from pageDateID) get data from LS ->  set data from LS to pageData -> set corresponding video and status

  const getParsedLocalStorageData = () => {
    const parsedLocalStorageData = JSON.parse(
      localStorage.getItem("PAGE_DATA_STORE")
    );
    return parsedLocalStorageData;
  };

  const loadExistingPageData = (parsedData) => {
    setCurrentVideoID(parsedData[pageDate].VIDEO_ID);
    setCurrentVideoStatus(parsedData[pageDate].VIDEO_STATUS);
  };

  const newPageData = (parsedData, randomVideoID) => {
    setCurrentVideoID(randomVideo);
    setCurrentVideoStatus(false);

    const newPageDataObject = JSON.stringify({
      ...parsedData,
      [pageDate]: {
        VIDEO_ID: randomVideoID,
        VIDEO_STATUS: false,
      },
    });

    setPageData(newPageDataObject);

    return newPageDataObject;
  };

  const storeNewData = (objectData) => {
    localStorage.setItem("PAGE_DATA_STORE", objectData);
    console.log("Set local storage");
  };

  useEffect(() => {
    setPageDate(pageDateID);
    setRandomVideo(pickRandomVideo(videoList));
  }, []);

  useEffect(() => {
    const parsedLocalStorageData = getParsedLocalStorageData();
    if (!parsedLocalStorageData[pageDate]) {
      console.log("No data found, creating data");
      const newPageDataObject = newPageData(
        parsedLocalStorageData,
        randomVideo
      );
      storeNewData(newPageDataObject);
    } else if (parsedLocalStorageData[pageDate]) {
      console.log("Loading existing data from localStorage");
      loadExistingPageData(parsedLocalStorageData);
    }
  }, [pageDate]);

  return (
    <div>
      <Wrapper>
        <InfoWrapper>
          {currentVideoStatus === true ? (
            <StatusWrapper>
              <CompleteIcon />
              <Status statusChange="#859e7e">Complete</Status>
            </StatusWrapper>
          ) : (
            <StatusWrapper>
              <IncompleteIcon />
              <Status>Incomplete</Status>
            </StatusWrapper>
          )}
          <Title>{pageDateText}</Title>
        </InfoWrapper>
        <VideoContainer>
          <Video
            url={`https://www.youtube.com/watch?v=${currentVideoID}`}
            onEnded={onVideoEndHandler}
            controls={true}
          />
          <ButtonContainer>
            <ButtonLink to="/">
              <BackButton>
                <AngleLeftIcon />
                <ButtonText>Back To Calendar</ButtonText>
              </BackButton>
            </ButtonLink>
          </ButtonContainer>
        </VideoContainer>
      </Wrapper>
    </div>
  );
};

export default Day;
