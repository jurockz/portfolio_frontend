"use-client";
import {
  StyledContainer,
  StyledExpertise,
  StyledExpertiseContainer,
  StyledTitle,
  StyledSection,
  StyledSecContainer,
  StyledDefaultWrapper,
} from "../styles/Expertise.styled";
import DownAnimation from "./DownAnimation";
import SideAnimation from "./SideAnimation";

const DownStyledTitle = DownAnimation(StyledTitle);
const DownStyledWrapper = DownAnimation(StyledDefaultWrapper);
const SideStyledExpertiseContainer = SideAnimation(StyledExpertiseContainer);

export default function Expertise() {
  return (
    <StyledSection id="Expertise" colorb="#ffffff">
      <StyledContainer>
        <div>
          <DownStyledTitle>Kenntnisse</DownStyledTitle>

          <SideStyledExpertiseContainer side="left">
            <StyledExpertise>HTML</StyledExpertise>
            <StyledExpertise>CSS</StyledExpertise>
            <StyledExpertise>JavaScript</StyledExpertise>
            <StyledExpertise>React</StyledExpertise>
            <StyledExpertise>Next js</StyledExpertise>
            <StyledExpertise>Python</StyledExpertise>
            <StyledExpertise>TensorFlow</StyledExpertise>
            <StyledExpertise>Flask</StyledExpertise>
            <StyledExpertise>Selenium</StyledExpertise>
            <StyledExpertise>MongoDB</StyledExpertise>
            <StyledExpertise>Go</StyledExpertise>
            <StyledExpertise>Java</StyledExpertise>
            <StyledExpertise>Spring Boot</StyledExpertise>
          </SideStyledExpertiseContainer>
        </div>
        <StyledSecContainer>
          <DownStyledWrapper>
            <StyledTitle>Sprachen</StyledTitle>

            <div>Deutsch - Muttersprache</div>
            <div>Englisch - Fließend in Wort und Schrift</div>
          </DownStyledWrapper>
          <div>
            <DownStyledTitle>Hobbys</DownStyledTitle>
            <SideStyledExpertiseContainer side="right">
              <StyledExpertise>Basketball</StyledExpertise>
              <StyledExpertise>Joggen</StyledExpertise>
              <StyledExpertise>Malen</StyledExpertise>
            </SideStyledExpertiseContainer>
          </div>
        </StyledSecContainer>
      </StyledContainer>
    </StyledSection>
  );
}
