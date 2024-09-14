import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const StyledMobileNavContainer = styled(Link)`
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 3px;
  border-radius: 50%;
`;

export const StyledNavBarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: black;
  color: #fff;
  /* box-shadow: 0px 8px rgba(0, 0, 0, 0.1); */
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 1000;
`;

export const AnimatedNavBarContainer = styled(motion.nav)`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: black;
  color: #fff;
  /* box-shadow: 0px 8px rgba(0, 0, 0, 0.1); */
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 1000;
`;

export const StyledNavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  a {
    font-size: 20px;
    margin-right: 30px;
    cursor: pointer;
  }
`;

export const StyledLogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  font-size: 25px;
  cursor: pointer;

  img {
    margin-right: 5px;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  font-size: 20px;
  cursor: pointer;
`;

export const StyledNavBarContainerTwo = styled.nav`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: none;
  color: #000;
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 1000;
`;

export const AnimatedNavBarContainerTwo = styled(motion.nav)`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: none;
  color: #000;
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 1000;
`;
