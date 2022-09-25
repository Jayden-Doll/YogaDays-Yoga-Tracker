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
        <CopyrightInfo> @ 2022 YogaDays</CopyrightInfo>
        <Decoration />
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
