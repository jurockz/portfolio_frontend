import styled from "styled-components";

interface StyledExperienceContainerI {
  colorb: string;
}

export const StyledSection = styled.section<StyledExperienceContainerI>`
  background: ${(props) => props.colorb || "#fff"};
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 70px 20px 70px 20px;
`;

export const StyledExpContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding-bottom: 40px;
`;

export const StyledText = styled.div`
  color: #86868b;
  font-size: 21px;
  padding-bottom: 10px;
  width: 60%;
  @media (max-width: 880px) {
    width: 80%;
    font-size: 16px;
  }
  text-align: center;
`;

export const StyledWordSpan = styled.span`
  color: #1d1d1f;
  font-weight: bold;
`;
