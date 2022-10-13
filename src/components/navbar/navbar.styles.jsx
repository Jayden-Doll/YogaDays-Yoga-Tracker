import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  margin-bottom: 2rem;

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

export const Logo = styled(Link)`
  font-size: 2.5rem;
  text-decoration: none;
  color: inherit;
  padding: 0 2rem;
`;

export const Decoration = styled.div`
  width: 40%;
  min-width: 10%;
  height: 1px;

  background-color: #333;
`;
