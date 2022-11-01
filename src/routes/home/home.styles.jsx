import { ReactComponent as MoonImage } from "../../assets/moon-image.svg";

import styled from "styled-components";

export const Wrapper = styled.main`
  min-width: 100%;
  min-height: calc(100vh - 10.8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  gap: 8rem;
  padding: 4rem 0;

  @media (max-width: 735px) {
    gap: 0rem;
    padding: 0;
  }
  @media (max-width: 535px) {
  }
  @media (max-width: 410px) {
  }
`;

export const PageDecoration = styled(MoonImage)`
  @media (max-width: 735px) {
    width: 50%;
    height: 75%;
    padding: 2rem 0;
  }

  @media (max-width: 410px) {
    padding: 0;
    height: 25%;
  }
`;
