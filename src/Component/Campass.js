import React from "react";
import direction from "../asset/direction.png";
import styled from "styled-components";
const CampassTop = styled.div`
  /* background-color: #fdf6f0; */
  /* position: -webkit-sticky; */
  position: absolute;
`
const CampassContainer = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  position: -webkit-sticky;
  position: sticky;
  /* position: relative; */
  /* top: 40px;
  left: 50px; */
  width: 60px;
  height: 60px;
  animation-duration: 4s;
  animation-name: shake;
  animation-iteration-count: infinite;
  .img {

    height: 80px;
    width: 80px;
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
    70% {
      -webkit-transform: scale(1.5) rotate(8deg);
      transform: scale(1.5) rotate(8deg);
    }

    60% {
      -webkit-transform: scale(1.3) rotate(-8deg);
      transform: scale(1.3) rotate(-8deg);
    }

    80% {
      -webkit-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }
`;

const Campass = () => {
  return (
 
    <CampassContainer>
      <img src={direction} alt="Campass"></img>
    </CampassContainer>
  );
};

export default Campass;
