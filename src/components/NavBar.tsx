import { useScroll, useTransform } from "framer-motion";
import logo from "../assets/logo.svg";
import logo_black from "../assets/logo_black.svg";
import { useMediaQuery } from "react-responsive";
import {
  AnimatedNavBarContainer,
  AnimatedNavBarContainerTwo,
  StyledLogoLink,
  StyledNavBarContainer,
  StyledNavBarContainerTwo,
  StyledNavBarWrapper,
} from "../styles/NavBar.styled";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 880px)" });
  const { scrollY } = useScroll();

  const headerOneOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const headerTwoOpacity = useTransform(scrollY, [0, 150], [0, 1]);

  if (isMobile) {
    return (
      <>
        <StyledNavBarContainer>
          <StyledLogoLink to="Introduction" smooth={true} duration={500}>
            <img src={logo} alt="Logo" width={50} height={50} />
            Jurek
          </StyledLogoLink>
          <StyledNavBarWrapper></StyledNavBarWrapper>
        </StyledNavBarContainer>
        <StyledNavBarContainerTwo>
          <StyledLogoLink to="Introduction" smooth={true} duration={500}>
            <img src={logo_black} alt="Logo" width={50} height={50} />
            Jurek
          </StyledLogoLink>
          <StyledNavBarWrapper></StyledNavBarWrapper>
        </StyledNavBarContainerTwo>
      </>
    );
  }

  return (
    <>
      <AnimatedNavBarContainer
        style={{
          opacity: headerOneOpacity,
        }}
      >
        <StyledLogoLink to="Introduction" smooth={true} duration={500}>
          <img src={logo} alt="Logo" width={50} height={50} />
          Jurek
        </StyledLogoLink>
        <StyledNavBarWrapper></StyledNavBarWrapper>
      </AnimatedNavBarContainer>

      <AnimatedNavBarContainerTwo
        style={{
          opacity: headerTwoOpacity,
        }}
      >
        <StyledLogoLink to="Introduction" smooth={true} duration={500}>
          <img src={logo_black} alt="Logo" width={50} height={50} />
          Jurek
        </StyledLogoLink>
        <StyledNavBarWrapper></StyledNavBarWrapper>
      </AnimatedNavBarContainerTwo>
    </>
  );
}
