import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  position: relative;
`;

const Cards = () => {
  const [cardstack, setCardstack] = useState(true);
  return (
    <Container
      onMouseEnter={() => {
        setCardstack(false);
      }}
      onMouseLeave={() => {
        setCardstack(true);
      }}
    >
      <Card rotation={0} vis={3} brightness={100} />
      {cardstack ? (
        <>
          <Card rotation={10} vis={2} brightness={90} />
          <Card rotation={20} vis={1} brightness={80} />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Cards;
