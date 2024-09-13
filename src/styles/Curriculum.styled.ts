import styled from "styled-components";

interface StyledSectionI {
  colorb: string;
}

export const StyledSection = styled.section<StyledSectionI>`
  display: flex;
  justify-content: center;
  padding: 70px 20px 70px 20px;
  background: ${(props) => props.colorb || "#fff"};
`;

export const StyledCv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  width: 540px;
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    width: 250px;
  }
`;

interface StyledCvEntryI {
  row: number;
  column: number;
}

export const StyledCvEntry = styled.div<StyledCvEntryI>`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  display: flex;
  align-items: center;
  @media (max-width: 880px) {
    grid-row: ${(props) => (props.column == 1 ? props.row : props.row + 4)};
    grid-column: 1;
    justify-content: center;
  }
`;

export const StyledCvTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-left: 15px;
`;

export const StyledCvEntryTextContainer = styled.div`
  margin-left: 15px;
`;

export const StyledCvEntryTitle = styled.div`
  font-weight: bold;
`;

export const StyledCvEntryInfo = styled.div`
  color: #565656;
`;

export const StyledCvEntryDate = styled.div`
  color: #787878;
`;
