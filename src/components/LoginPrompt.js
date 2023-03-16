import React from "react";

import styled from "styled-components";
const Container = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
const Header = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
  align-self: flex-start;
`;
const NameForm = styled.div`
  background-color: ${({ theme }) => theme.inputs};
  border-radius: 10px;
  height: 30px;
  width: 290px;
  padding: 10px 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.bg};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.accent};
  }
`;
const MailField = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 10px;
  margin: 10px;
  height: 30px;
  width: 70%;
  font-size: 15px;
  :focus {
    outline: none;
  }
`;
const DropDown = styled.button`
  cursor: pointer;
  border: none;
  height: 150%;
  width: 60%;
  font-size: 15px;
  color: ${({ theme }) => theme.textSoft};
  border-radius: 10px;
  background-color: white;

  :hover {
    background-color: #eeeeff;
    color: ${({ theme }) => theme.accent};
  }
`;
const PassField = styled.input`
  background-color: ${({ theme }) => theme.inputs};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 270px;
  padding: 10px 15px;
  font-size: 15px;
  transition: 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.bg};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.accent};
  }
`;
const MainButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 300px;
  font-weight: bold;
  padding: 10px 5px;
  font-size: 15px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
const AltButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  border: none;
  border-radius: 10px;
  height: 45px;
  width: 300px;
  font-weight: bold;
  padding: 10px 5px;
  font-size: 15px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
const loginPrompt = (props) => {
  return (
    <Container>
      <Header>
        Welcome to <br /> System Package
      </Header>
      <NameForm type="email">
        <MailField placeholder="Username" />
        <DropDown>@heads.design</DropDown>
      </NameForm>
      <PassField type="password" placeholder="Password" />
      <MainButton onClick={() => props.setOtp(!props.otp)}>Next</MainButton>
      <AltButton>Forgot your password?</AltButton>
    </Container>
  );
};

export default loginPrompt;
