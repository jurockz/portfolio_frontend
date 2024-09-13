import rfhLogo from "../assets/rfh_logo.svg";
import micormerceLogo from "../assets/micromerce_logo.svg";
import hhuLogo from "../assets/hhu_logo.png";
import antwerpesLogo from "../assets/antwerpes_logo.jpg";
import igsLogo from "../assets/igs_logo.svg";
import check24Logo from "../assets/check24_logo.svg";
import workIcon from "../assets/work_icon.svg";
import uni_icon from "../assets/university_icon.svg";
import {
  StyledCv,
  StyledCvEntry,
  StyledCvEntryDate,
  StyledCvEntryInfo,
  StyledCvEntryTextContainer,
  StyledCvEntryTitle,
  StyledCvTitle,
  StyledSection,
} from "../styles/Curriculum.styled";
import DownAnimation from "./DownAnimation";
import SideAnimation from "./SideAnimation";

const DownStyledCvEntry = DownAnimation(StyledCvEntry);
const SideStyledCvEntry = SideAnimation(StyledCvEntry);

export default function Curriculum() {
  return (
    <StyledSection id="Curriculum" colorb="#ffffff">
      <StyledCv>
        <DownStyledCvEntry row={1} column={1}>
          <img src={uni_icon} width={40} height={40} alt="uni icon" />
          <StyledCvTitle>Akademisch</StyledCvTitle>
        </DownStyledCvEntry>

        <DownStyledCvEntry row={1} column={2}>
          <img src={workIcon} width={40} height={40} alt="work icon" />
          <StyledCvTitle>Beruflich</StyledCvTitle>
        </DownStyledCvEntry>

        <SideStyledCvEntry row={2} column={1} side="left">
          <img src={rfhLogo} width={60} height={60} alt="RFH Logo" />
          <StyledCvEntryTextContainer>
            <StyledCvEntryTitle>Informatik</StyledCvEntryTitle>
            <StyledCvEntryInfo>Rheinische Fachhochschule</StyledCvEntryInfo>
            <StyledCvEntryDate>WS 21/22 - SS 24</StyledCvEntryDate>
          </StyledCvEntryTextContainer>
        </SideStyledCvEntry>

        <SideStyledCvEntry row={2} column={2} side="right">
          <img
            src={micormerceLogo}
            width={60}
            height={60}
            alt="Micromerce Logo"
          />
          <StyledCvEntryTextContainer>
            <StyledCvEntryTitle>Frontend Entwickler</StyledCvEntryTitle>
            <StyledCvEntryInfo>Micromerce</StyledCvEntryInfo>
            <StyledCvEntryDate>Mai 2022 - März 2023</StyledCvEntryDate>
          </StyledCvEntryTextContainer>
        </SideStyledCvEntry>

        <SideStyledCvEntry row={3} column={1} side="left">
          <img src={hhuLogo} width={60} alt="hhu Logo" />
          <StyledCvEntryTextContainer>
            <StyledCvEntryTitle>Informatik</StyledCvEntryTitle>
            <StyledCvEntryInfo>Heinrich Heine Universität</StyledCvEntryInfo>
            <StyledCvEntryDate>WS 19</StyledCvEntryDate>
          </StyledCvEntryTextContainer>
        </SideStyledCvEntry>

        <SideStyledCvEntry row={3} column={2} side="right">
          <img
            src={antwerpesLogo}
            width={60}
            height={60}
            alt="antwerpes Logo"
          />
          <StyledCvEntryTextContainer>
            <StyledCvEntryTitle>Frontend Entwickler</StyledCvEntryTitle>
            <StyledCvEntryInfo>Antwerpes</StyledCvEntryInfo>
            <StyledCvEntryDate>Okt. 2021 - März 2022</StyledCvEntryDate>
          </StyledCvEntryTextContainer>
        </SideStyledCvEntry>

        <SideStyledCvEntry row={4} column={1} side="left">
          <img src={igsLogo} width={60} height={60} alt="igs Logo" />
          <StyledCvEntryTextContainer>
            <StyledCvEntryTitle>Schüler</StyledCvEntryTitle>
            <StyledCvEntryInfo>Gesamtschule Holweide</StyledCvEntryInfo>
            <StyledCvEntryDate>2008</StyledCvEntryDate>
          </StyledCvEntryTextContainer>
        </SideStyledCvEntry>

        <SideStyledCvEntry row={4} column={2} side="right">
          <img src={check24Logo} width={60} height={60} alt="check24 Logo" />
          <StyledCvEntryTextContainer>
            <StyledCvEntryTitle>Quality Assurance Engineer</StyledCvEntryTitle>
            <StyledCvEntryInfo>Check24</StyledCvEntryInfo>
            <StyledCvEntryDate>Aug. 2020 - Okt. 2021</StyledCvEntryDate>
          </StyledCvEntryTextContainer>
        </SideStyledCvEntry>
      </StyledCv>
    </StyledSection>
  );
}
