import { ReactComponent as MoonImage } from "../../assets/moon-image.svg";

import styled from "styled-components";

export const Wrapper = styled.main`
  min-width: 100%;
  min-height: calc(100vh - 10.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10rem;
`;

export const PageDecoration = styled(MoonImage)``;
