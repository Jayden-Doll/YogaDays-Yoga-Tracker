import styled from "styled-components";

import YouTube from "react-youtube";

export const Wrapper = styled.main`
  min-width: 100%;
  min-height: calc(100vh - 10.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: Bold;
`;

export const Video = styled(YouTube)`
  width: 560px;
  height: 315px;
  border: none;
`;
