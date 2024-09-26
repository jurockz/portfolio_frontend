import {
  StyledButtonWrapper,
  StyledContactBtn,
  StyledContainer,
  StyledExperienceLink,
  StyledImageContainer,
  StyledImageWrapper,
  StyledIntroductionContainer,
  StyledSection,
} from "../styles/Introduction.styled";
import image from "../assets/Bewerbungsfoto.jpg";
import linkedin_icon from "../assets/linkedIn.svg";
import github_icon from "../assets/github_icon.svg";
import Logo from "./common/Logo";
import Text from "./common/Text";

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
          <Text
            $color="black"
            $fontSize={40}
            $paddingBottom={10}
            $TextAlign="start"
          >
            Jurek Ohrndorf
          </Text>
          <Text
            $color="#565656"
            $fontSize={20}
            $paddingBottom={10}
            $TextAlign="start"
          >
            Full-Stack | Machine Learning
          </Text>
          <Text
            $color="#787878"
            $fontSize={18}
            $TextAlign="start"
            $mediaMaxWidth="330px"
          >
            Hi! Ich bin Jurek Ohrndorf.
            <br /> Ich habe eine große Leidenschaft für das Programmieren und
            liebe es, kreative Lösungen für anspruchsvolle Probleme zu finden.
            Meinen Abschluss in Informatik habe ich an der Rheinischen
            Hochschule gemacht. Während meines Studiums und meiner Tätigkeit als
            Werkstudent bei CHECK24, Antwerpes und Micromerce konnte ich bereits
            wertvolle Praxiserfahrung sammeln.
            <br />
            <StyledExperienceLink to="Experience" smooth={true} duration={1500}>
              Erfahre mehr...
            </StyledExperienceLink>
          </Text>
          <StyledButtonWrapper>
            <StyledContactBtn to="Contact" smooth={true} duration={500}>
              Kontaktieren
            </StyledContactBtn>
            <Logo
              src={linkedin_icon}
              width={60}
              height={60}
              href="https://www.linkedin.com/in/jurek-ohrndorf-8431001ba/"
              alt="linkedIn"
            />
            <Logo
              src={github_icon}
              width={60}
              height={60}
              href="https://github.com/jurockz"
              alt="github"
            />
          </StyledButtonWrapper>
        </StyledIntroductionContainer>
      </StyledContainer>
    </StyledSection>
  );
}
