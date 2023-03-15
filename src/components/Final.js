import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Logo = styled.img`
  width: 50%;
`;
const SuccessText = styled.h2`
  color: ${({ theme }) => theme.accent};
`;
const Final = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <SuccessText>Success!</SuccessText>
    </Container>
  );
};

export default Final;
