import React from "react";
import styled from "styled-components";
import Turtle from '../asset/North.png'
import { mobile,tablet,laptop,laptopL,laptopXL,wideScreen } from "../responsive";
const Tile = styled.div`
  background-color: ${(props) => props.color};
  width:95%;
  /* width:calc(100%/${(props) => props.xLength})px; */
  height: 95%;
  /* height:calc(100%/${(props) => props.xLength})px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 3px;
  font-size:30px;
  
  ${wideScreen({  fontSize:"30px"})}
  ${laptopXL({fontSize:"25px"})}
  ${laptopL({fontSize:"20px"})}
  ${laptop({fontSize:"15px" })}
  ${tablet({ fontSize:"10px"})}
  /* ${mobile({fontSize:"5px"})} */
  img {
    transition-timing-function: ease-in;
    width: 80%;
    height: 80%;
    z-index: 1;
    transform: rotate(
      ${(props) =>
        (props.facing === "NORTH" && "0deg") ||
        (props.facing === "EAST" && "90deg") ||
        (props.facing === "SOUTH" && "180deg") ||
        (props.facing === "WEST" && "270deg")}
    );
  }
`;
const TileComponent = ({ facing, color, i, j, displayTurtle,xLength }) => {
  
  return (
    <Tile facing={facing} color={color} xLength={xLength} >
      
      {displayTurtle ? (
        <img src={Turtle} alt="turtle"></img>
      ) : (
        <p>
          [ {i} , {j} ]
        </p>
      )}{" "}
    </Tile>
  );
};

export default TileComponent;
