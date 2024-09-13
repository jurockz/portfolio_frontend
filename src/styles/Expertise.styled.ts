import styled from "styled-components";

interface StyledSectionI {
  colorb: string;
}

export const StyledSection = styled.section<StyledSectionI>`
  padding: 70px 20px 70px 20px;
  display: flex;
  align-items: center;
  background: ${(props) => props.colorb || "#fff"};
`;

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const StyledTitle = styled.div`
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;
  color: black;
`;

export const StyledExpertiseContainer = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledExpertise = styled.div`
  display: inline-block;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: 8px;
  margin: 5px;
  background: black;
`;

export const StyledSecContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 40px;
  text-align: center;
  color: #565656;
`;

export const StyledDefaultWrapper = styled.div``;
