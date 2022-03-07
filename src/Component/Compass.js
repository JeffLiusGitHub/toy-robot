import React from "react";
import compass from "../asset/Compass.png";
import styled from "styled-components";

const CompassContainer = styled.div`
  display: flex;
  position: sticky;
  width: 70px;
  height: 70px;
  left: 30px;
  top: 30px;
  animation-duration: 4s;
  animation-name: shake;
  animation-iteration-count: infinite;
  .img {
    position: sticky;
    position: relative;
    z-index: 1;
    height: 100px;
    width: 100px;
  }
  @keyframes shake {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    20% {
      -webkit-transform: scale(0.9) rotate(-8deg);
      transform: scale(0.9) rotate(-8deg);
    }
    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    60% {
      -webkit-transform: scale(1.3) rotate(-8deg);
      transform: scale(1.3) rotate(-8deg);
    }
    70% {
      -webkit-transform: scale(1.5) rotate(8deg);
      transform: scale(1.5) rotate(8deg);
    }
    80% {
      -webkit-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }
`;

const Compass = () => {
  return (
    <CompassContainer>
      <img src={compass} alt="Campass"/>
    </CompassContainer>
  );
};

export default Compass;
