import React from "react";
import styled from "@emotion/styled";

const Location = ({ city, country }) => {
  const Container = styled.div`
    text-align: center;
  `;

  const City = styled.h1`
    font-family: "Open Sans", "sans-serif";
    font-size: 1.6rem;
  `;

  const Country = styled.h3`
    font-family: "Lora", "sans";
    font-size: 1rem;
  `;

  return (
    <>
      <City>{city}</City>
      <Country>{country}</Country>
    </>
  );
};

export default Location;
