import {
  StyledButtonWrapper,
  StyledContactBtn,
  StyledContainer,
  StyledImageContainer,
  StyledImageWrapper,
  StyledIntroductionContainer,
  StyledLongInfo,
  StyledSection,
  StyledShortInfo,
  StyledTitle,
} from "../styles/Introduction.styled";
import image from "../assets/Bewerbungsfoto.jpg";
import linkedin_icon from "../assets/linkedIn.svg";
import github_icon from "../assets/github_icon.svg";

export default function Introduction() {
  return (
    <StyledSection id="Introduction" colorb="#f8f9fa">
      <StyledContainer>
        <StyledImageContainer>
          <StyledImageWrapper>
            <img src={image} alt="Berwerbungsfoto" width={300} height={300} />
          </StyledImageWrapper>
        </StyledImageContainer>
        <StyledIntroductionContainer>
          <StyledTitle>Jurek Ohrndorf</StyledTitle>
          <StyledShortInfo>Full-Stack | Machine Learning</StyledShortInfo>
          <StyledLongInfo>
            Ich habe an der Rheinischen Fachhochschule Informatik studiert. In
            vielen Projekten während des Studiums konnte ich bereits Erfahrungen
            im Bereich Machine Learning erlangen. Außerdem konnte ich in meinen
            Werkstudententätigkeiten bei CHECK24, Antwerpes und Micromerce schon
            einiges an Erfahrung als Full-Stack- und QA-Engineer sammeln.
          </StyledLongInfo>
          <StyledButtonWrapper>
            <StyledContactBtn to="Contact" smooth={true} duration={500}>
              Kontaktieren
            </StyledContactBtn>
            <a
              href="https://www.linkedin.com/in/jurek-ohrndorf-8431001ba/"
              target="_blank"
            >
              <img src={linkedin_icon} width={60} height={60} alt="linkedin" />
            </a>
            <a href="https://github.com/jurockz" target="_blank">
              <img src={github_icon} width={60} height={60} alt="github" />
            </a>
          </StyledButtonWrapper>
        </StyledIntroductionContainer>
      </StyledContainer>
    </StyledSection>
  );
}
