import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, feelslike, condition }) => {
  const Temp = styled.h1`
    font-family: "Open Sans", "sans-serif";
    font-size: 2rem;
    font-weight: 200;
  `;

  const Feelslike = styled.h2`
    font-family: "Open Sans", "sans-serif";
    font-size: 1.5rem;
    font-weight: 150px;
  `;

  const State = styled.h3`
    font-family: "Open Sans", "sans-serif";
    font-size: 1.2rem;
  `;

  return (
    <>
      <Temp> {temp}°F </Temp>
      <Feelslike> {feelslike} °F </Feelslike>
      <State> {condition}</State>
    </>
  );
};

export default Condition;
