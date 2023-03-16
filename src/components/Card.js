import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  right: 10px;
  top: -230px;
  background-color: ${({ theme }) => theme.accent};
  margin: 0;
  height: 65vh;
  width: 300px;
  border-radius: 20px;
  padding: 30px;
  filter: brightness(${(props) => props.brightness}%);
  transform: rotate(${(props) => props.rotation}deg);
  color: white;
  font-weight: bold;
  font-size: 30px;
  z-index: ${(props) => props.vis};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;
  :hover {
    box-shadow: inset 0 0 0 5px ${({ theme }) => theme.text};
  }
`;
const CircleContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Circle = styled.div`
  cursor: pointer;
  width: 12px;
  height: 12px;
  border-radius: 30px;
  background-color: white;
`;
const Circlelite = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 30px;
  background-color: lightgray;
  transition: 0.8s;
  :hover {
    background-color: #fff;
  }
`;
const Card = (props) => {
  return (
    <Container {...props}>
      Developer Handoff Improvements <br />
      <CircleContainer>
        <Circle />
        <Circlelite />
        <Circlelite />
        <Circlelite />
      </CircleContainer>
    </Container>
  );
};

export default Card;
