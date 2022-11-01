import styled from "styled-components";

import { Link } from "react-router-dom";

import { FaCalendarTimes, FaCalendarCheck, FaAngleLeft } from "react-icons/fa";

import ReactPlayer from "react-player/youtube";

export const IncompleteIcon = styled(FaCalendarTimes)`
  color: #333;
  width: 1.5rem;
  height: 1.5rem;
`;

export const CompleteIcon = styled(FaCalendarCheck)`
  width: 1.5rem;
  height: 1.5rem;
  color: #467838;
`;

export const AngleLeftIcon = styled(FaAngleLeft)`
  color: #333;
  width: 1.5rem;
  height: 1.5rem;
`;

export const Wrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 10.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  min-width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: Bold;
`;

export const Status = styled.h2`
  font-size: 2rem;
  font-weight: Bold;
  ${({ statusChange }) => `color: ${statusChange}`};
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  margin-top: 0.9rem;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Video = styled(ReactPlayer)`
  display: block;
  min-width: 100%;
  height: 100%;
  border: none;
  box-shadow: 10px 8px 26px 0px rgba(95, 77, 28, 0.5);
  -webkit-box-shadow: 10px 8px 26px 0px rgba(95, 77, 28, 0.5);
  -moz-box-shadow: 10px 8px 26px 0px rgba(95, 77, 28, 0.5);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`;

export const BackButton = styled.button`
  width: auto;
  height: 3rem;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.75rem;
  font-family: "Cutive Mono";
  background-color: transparent;
  border: none;
  cursor: pointer;

  :hover {
    text-decoration: 1px underline #333;
    text-underline-offset: 8px;
  }
`;

export const ButtonText = styled.p``;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;
