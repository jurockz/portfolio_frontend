import {
  StyledContactContainer,
  StyledDefaultContainer,
  StyledSection,
  StyledText,
} from "../styles/Contact.styled";

import mailIcon from "../assets/mail.svg";
import locationIcon from "../assets/location.svg";
import SideAnimation from "./SideAnimation";

const AnimatedStyledContactContainer = SideAnimation(StyledContactContainer);
const AnimatedStyledDefaultContainer = SideAnimation(StyledDefaultContainer);

export default function Contact() {
  const email = "jurek.ohrndorf@gmail.com";
  const subject = "";
  const body = `Hey Jurek,`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <StyledSection id="Contact" colorb="#f8f9fa">
      <AnimatedStyledContactContainer href={mailtoLink} side="left">
        <img src={mailIcon} width={40} height={40} alt="mail icon" />
        <StyledText>jurek.ohrndorf@gmail.com</StyledText>
      </AnimatedStyledContactContainer>

      <AnimatedStyledDefaultContainer side="right">
        <img src={locationIcon} width={40} height={40} alt="location icon" />
        <StyledText>Cologne, Germany</StyledText>
      </AnimatedStyledDefaultContainer>
    </StyledSection>
  );
}
