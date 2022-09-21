import {
  NavbarContainer,
  ContentContainer,
  Decoration,
  Logo,
} from "./navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <ContentContainer>
        <Decoration />
        <Logo></Logo>
        <Decoration />
      </ContentContainer>
    </NavbarContainer>
  );
};

export default Navbar;
