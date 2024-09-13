import styled from "styled-components";

interface StyledSectionI {
  colorb: string;
}

export const StyledSection = styled.section<StyledSectionI>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 20px 70px 20px;
  background: ${(props) => props.colorb || "#fff"};
`;
