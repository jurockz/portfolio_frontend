import styled from "styled-components";

interface StyledProjectsContainerI {
  colorb: string;
}

export const StyledProjectsContainer = styled.section<StyledProjectsContainerI>`
  background: ${(props) => props.colorb || "#fff"};
  padding: 70px 20px 70px 20px;
`;

export const StyledProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
