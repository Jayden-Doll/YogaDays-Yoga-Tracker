import {
  FooterContainer,
  ContentContainer,
  Decoration,
  CopyrightInfo,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Decoration />
        <CopyrightInfo></CopyrightInfo>
        <Decoration />
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
