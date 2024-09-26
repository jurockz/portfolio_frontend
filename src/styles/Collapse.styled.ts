import styled from "styled-components";
import { StyledPaddingDiv } from "./Common.styled";
import { alignT } from "../types/common";

interface SCollapseContI {
  width?: string;
  align?: alignT;
}

export const StyledCollapseContainer = styled(StyledPaddingDiv)<SCollapseContI>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || "center"};
`;

interface TitleContainerI {
  width?: string;
}

export const StyledTitleContainer = styled(StyledPaddingDiv)<TitleContainerI>`
  width: ${(props) => props.width || "60%"};
  border-bottom: 1px solid black;
  cursor: pointer;
`;
