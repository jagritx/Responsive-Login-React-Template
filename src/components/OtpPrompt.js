import React from "react";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 50vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
const Header = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
  align-self: flex-start;
`;
const Alttext = styled.h2`
  color: ${({ theme }) => theme.textSoft};
  align-self: flex-start;
  font-weight: 300;
  font-size: 15px;
`;
const PassContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const PassField = styled.input`
  background-color: ${({ theme }) => theme.inputs};
  color: ${({ theme }) => theme.text};
  border: solid 2px ${({ theme }) => theme.accent};
  border-radius: 10px;
  height: 25px;
  width: 1vw;
  padding: 10px 15px;
  font-size: 15px;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const AltButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 10px 5px;
  font-size: 15px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
const AltAltButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 10px 5px;
  font-size: 15px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
const OtpPrompt = (props) => {
  return (
    <Container>
      <Header>
        Enter the Verification
        <br /> Code to Continue
      </Header>
      <Alttext>
        We sent to{" "}
        <span style={{ color: "#0858F7" }}>hellouser@heads.design.</span> If you
        don’t see it, check your spam.
      </Alttext>
      <PassContainer>
        <PassField type="text" />
        <PassField type="text" />
        <PassField type="text" />
        <PassField type="text" />
        <PassField type="text" />
        <PassField type="text" />
      </PassContainer>
      <ButtonContainer>
        <AltButton onClick={() => props.setFinal(!props.final)}>Back</AltButton>{" "}
        <AltAltButton>Resend 00:00</AltAltButton>
      </ButtonContainer>
    </Container>
  );
};

export default OtpPrompt;
