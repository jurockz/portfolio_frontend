import styled from "styled-components";
import { Link } from "react-scroll";

interface StyledSectionI {
  colorb: string;
}

export const StyledSection = styled.section<StyledSectionI>`
  padding: 100px 20px 0px 20px;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.colorb || "#fff"};
  @media (max-width: 880px) {
    padding: 50px 20px 0px 20px;
    min-height: calc(100vh - 50px);
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 300px;
`;

export const StyledIntroductionContainer = styled.div`
  @media (max-width: 880px) {
    text-align: center;
  }
`;

export const StyledLongInfo = styled.div`
  color: #787878;
  @media (max-width: 880px) {
    max-width: 330px;
  }
`;

export const StyledExperienceLink = styled(Link)`
  color: #57669c;
  text-decoration: underline;
  cursor: pointer;
  line-height: 2;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const StyledContactBtn = styled(Link)`
  display: inline-block;
  background: black;
  color: white;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;

  cursor: pointer;
`;
