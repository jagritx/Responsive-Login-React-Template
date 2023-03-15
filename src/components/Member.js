import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 3%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Ref = styled.span`
  color: ${({ theme }) => theme.accent};
`;
const Member = () => {
  return (
    <Container>
      Not a member? <Ref>Create Account</Ref>
    </Container>
  );
};

export default Member;
