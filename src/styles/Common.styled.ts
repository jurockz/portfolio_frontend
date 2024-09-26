import styled, { css } from "styled-components";
import { MediaPaddingI, PaddingI, TextI } from "../types/common";

export const StyledPaddingDiv = styled.div<PaddingI & MediaPaddingI>`
  padding-bottom: ${(props) => props.$paddingBottom || 0}px;
  padding-top: ${(props) => props.$paddingTop || 0}px;
  padding-left: ${(props) => props.$paddingLeft || 0}px;
  padding-right: ${(props) => props.$paddingRight || 0}px;
  @media (max-width: ${(props) => props.$mediaWidth || 880}px) {
    padding-bottom: ${(props) =>
      props.$mediaPaddingBottom || props.$paddingBottom || 0}px;
    padding-top: ${(props) =>
      props.$mediaPaddingTop || props.$paddingTop || 0}px;
    padding-left: ${(props) =>
      props.$mediaPaddingLeft || props.$paddingLeft || 0}px;
    padding-right: ${(props) =>
      props.$mediaPaddingRight || props.$paddingRight || 0}px;
  }
`;

export const StyledText = styled(StyledPaddingDiv)<TextI>`
  display: block;
  color: ${(props) => props.$color || "#86868b"};
  font-size: ${(props) => props.$fontSize || 21}px;
  text-align: ${(props) => props.$TextAlign || "center"};
  max-width: ${(props) => props.$maxWidth || "100%"};
  font-weight: ${(props) => props.$fontWeight || "normal"};
  @media (max-width: ${(props) => props.$mediaWidth || 880}px) {
    max-width: ${(props) => props.$mediaMaxWidth || props.$maxWidth || "100%"};
    font-size: ${(props) => props.$mediaFontSize || props.$fontSize || 16}px;
  }
`;

export const StyledWordSpan = styled.span`
  color: #1d1d1f;
  font-weight: bold;
`;

export const StyledTextLink = styled.a<TextI & PaddingI>`
  text-decoration: underline;
  cursor: pointer;
  line-height: 2;
  color: ${(props) => props.$color || "#86868b"};
  font-size: ${(props) => props.$fontSize || 21}px;
  text-align: ${(props) => props.$TextAlign || "center"};
  padding-bottom: ${(props) => props.$paddingBottom || 0}px;
  padding-top: ${(props) => props.$paddingTop || 0}px;
  padding-left: ${(props) => props.$paddingLeft || 0}px;
  padding-right: ${(props) => props.$paddingRight || 0}px;
`;

export const StyledDefaultWrapper = styled(StyledText)``;
