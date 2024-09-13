import styled from "styled-components";

interface StyledSectionI {
  colorb: string;
}

export const StyledSection = styled.section<StyledSectionI>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 70px 20px 70px 20px;
  background: ${(props) => props.colorb || "#fff"};

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const StyledDefaultContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledContactContainer = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

export const StyledText = styled.div`
  font-size: 18px;
  margin-left: 15px;
  font-weight: bold;
`;
