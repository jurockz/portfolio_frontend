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
