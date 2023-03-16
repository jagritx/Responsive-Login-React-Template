import React, { useState } from "react";
import logo from "../assets/logo.svg";
import LoginPrompt from "../components/LoginPrompt";
import Cards from "../components/Cards";
import OtpPrompt from "../components/OtpPrompt";
import styled from "styled-components";
import Member from "../components/Member";
import Final from "../components/Final";
import "./Login.css";

const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;
const Logo = styled.img`
  margin: 2%;
  width: 35px;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30%;
`;

const Login = (props) => {
  const [otp, setOtp] = useState(false);
  const [final, setFinal] = useState(false);
  return (
    <Main>
      {!final ? (
        <>
          <Logo
            onClick={() => props.setDarkMode(!props.darkMode)}
            src={logo}
            alt="logo"
          />
          <Container>
            {!otp ? (
              <LoginPrompt otp={otp} setOtp={setOtp} />
            ) : (
              <OtpPrompt final={final} setFinal={setFinal} />
            )}
            <div id="cardsx">
              <Cards />
            </div>
          </Container>
          <Member />
        </>
      ) : (
        <>
          <Final />
        </>
      )}
    </Main>
  );
};

export default Login;
