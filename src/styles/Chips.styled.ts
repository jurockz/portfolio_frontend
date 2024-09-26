import styled from "styled-components";
import { StyledPaddingDiv } from "./Common.styled";

export const StyledChipContainer = styled(StyledPaddingDiv)``;

interface StyledChipWrapper {
  $maxWidth?: string;
}

export const StyledChipWrapper = styled.div<StyledChipWrapper>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: ${(props) => props.$maxWidth || "440px"};
`;

interface StyledChipI {
  $color: string;
  $background: string;
}

export const StyledChip = styled.div<StyledChipI>`
  display: inline-block;
  color: ${(props) => props.$color};
  font-weight: bold;
  border-radius: 10px;
  padding: 8px;
  margin: 5px;
  background: ${(props) => props.$background};
`;
