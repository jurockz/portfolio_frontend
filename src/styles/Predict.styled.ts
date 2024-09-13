import styled from "styled-components";

interface StyledSectionI {
  colorb: string;
}

export const StyledSection = styled.section<StyledSectionI>`
  position: relative;
  height: 600px;
  width: 100%;
  display: grid;
  grid-template-rows: 500px 100px;
  background: ${(props) => props.colorb || "#fff"};
`;

export const StyledCanvas = styled.canvas`
  width: 100%;
  background: white;
  box-shadow: inset 0 6px 15px -10px rgba(0, 0, 0, 0.5),
    inset 0 -6px 15px -10px rgba(0, 0, 0, 0.5);
`;

export const StyledBtnWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBtn = styled.button`
  padding: 13px;
  margin: 0;
  border-radius: 10px;
  border: 0;
  background: black;
  font-size: 23px;
  font-weight: bold;
  color: white;

  cursor: pointer;
`;

export const StyledMathWrapper = styled.div`
  position: absolute;
  top: 20px;
  font-size: 30px;
  left: 50%;
  transform: translateX(-50%);
`;
