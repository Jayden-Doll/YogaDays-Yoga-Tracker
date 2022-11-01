import { useContext, useEffect } from "react";
import { useParams } from "react-router";

import LocalStorageContext from "../../contexts/local-storage.context";

import videoList from "../../utils/videoList.utils";
import pickRandomVideo from "../../utils/videoPicker.utils";

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

  const getParsedLocalStorageData = () => {
    const parsedLocalStorageData = JSON.parse(
      localStorage.getItem("PAGE_DATA_STORE")
    );
    return parsedLocalStorageData;
  };

  const updateVideoStatus = (randomVideoID) => {
    const parsedData = getParsedLocalStorageData();
    const newPageDataObject = JSON.stringify({
      ...parsedData,
      [pageDate]: {
        VIDEO_ID: randomVideoID,
        VIDEO_COMPLETE: true,
      },
    });

    setPageData(newPageDataObject);

    localStorage.setItem("PAGE_DATA_STORE", newPageDataObject);
  };

  const onVideoEndHandler = () => {
    setCurrentVideoStatus(true);
    updateVideoStatus(currentVideoID);
  };

  const newPageData = (parsedData, randomVideoID) => {
    setCurrentVideoID(randomVideo);
    setCurrentVideoStatus(false);

    const newPageDataObject = JSON.stringify({
      ...parsedData,
      [pageDate]: {
        VIDEO_ID: randomVideoID,
        VIDEO_COMPLETE: false,
      },
    });

    setPageData(newPageDataObject);

    return newPageDataObject;
  };

  const storeNewData = (objectData) => {
    localStorage.setItem("PAGE_DATA_STORE", objectData);
  };

  const loadExistingPageData = (parsedData) => {
    setCurrentVideoID(parsedData[pageDate].VIDEO_ID);
    setCurrentVideoStatus(parsedData[pageDate].VIDEO_COMPLETE);
  };

  useEffect(() => {
    setPageDate(pageDateID);
    setRandomVideo(pickRandomVideo(videoList));

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const parsedLocalStorageData = getParsedLocalStorageData();
    if (!parsedLocalStorageData[pageDate]) {
      const newPageDataObject = newPageData(
        parsedLocalStorageData,
        randomVideo
      );
      storeNewData(newPageDataObject);
    } else if (parsedLocalStorageData[pageDate]) {
      loadExistingPageData(parsedLocalStorageData);
    }

    //eslint-disable-next-line
  }, [pageDate]);

  return (
    <div>
      <Wrapper>
        <InfoWrapper>
          {currentVideoStatus === true ? (
            <StatusWrapper>
              <CompleteIcon />
              <Status statusChange="#467838">Complete</Status>
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
