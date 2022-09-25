import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;

  margin-top: 2rem;

  min-width: 100%;
  height: 5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100%;
`;

export const CopyrightInfo = styled.small`
  color: inherit;
  padding: 0 2rem;
  font-size: 1.5rem;
  text-align: center;
`;

export const Decoration = styled.div`
  width: 38%;
  height: 1px;

  background-color: #333;
`;
