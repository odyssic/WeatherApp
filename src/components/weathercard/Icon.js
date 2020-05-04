import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 60%;
  `;

  let icon = "";
  switch (props.condition) {
    case "Clear":
      icon = `/img/sunny.png`;
      break;
    case "Clouds":
      icon = `/img/very-cloudy.png`;
      break;
    case "Tornado":
      icon = ``;
      break;
    case "Mist":
      icon = ``;
      break;
    case "Drizzle":
      icon = `/img/light-rain.png`;
      break;
    case "Snow":
      icon = `/img/snow/png`;
      break;

    case "Dust":
      icon = `img/Dust-2x.png`;
      break;

    case "Thunderstorm":
      icon = `/img/lightning.png`;
      break;

    case "Fog":
      icon = `/img/Fog-2x.png`;
      break;

    case "Hail":
      icon = `/img/Hail-2x.png`;
      break;

    case "Haze":
      icon = `/img/Haze-2x.png`;
      break;

    default:
      icon = `/img/light-rain.png`;
      break;
  }

  return <Icon className="icon" src={icon}></Icon>;
};

export default Icon;
