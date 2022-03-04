import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import TileComponent from "./TileComponent";
import {
  mobile,
  tablet,
  laptop,
  laptopL,
  laptopXL,
  wideScreen,
} from "../responsive";
const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.xLength}, 1fr);
  grid-template-rows: repeat(${(props) => props.yLength}, 1fr);
  /* width: inherit;
  height: inherit; */
  ${wideScreen({ width: "1000px", height: "1000px" })}
  ${laptopXL({ width: "900px", height: "900px" })}
  ${laptopL({ width: "800px", height: "800px" })}
  ${laptop({ width: "800px", height: "800px"})}
  ${tablet({ width: "600px", height: "600px" })}
  
  ${mobile({ width: "400px", height: "400px" })}
  /* ${mobile({ width: "120px", height: "120px" })} */
  /* padding:5px; */
  /* height: ${(props) => props.yLength}00px; */
  background-color: #fdf6f0;
`;

const Board = () => {
  const { axisX, axisY, facing } = useSelector((state) => state.robot);
  const { xLength, yLength } = useSelector((state) => state.board);

  let board = [];

  for (let j = xLength - 1; j >= 0; j--) {
    for (let i = 0; i < yLength; i++) {
      const number = j + i + 2;
      let displayTurtle = false;
      if (i === axisX && j === axisY) {
        displayTurtle = true;
        console.log({ axisX, axisY });
      }
      console.log(displayTurtle);
      if (number % 2 === 0) {
        board.push(
          <TileComponent
            facing={facing}
            color="#F8E2CF"
            i={i}
            j={j}
            displayTurtle={displayTurtle}
            xLength={xLength}
            key={`${i}+${j}`}
          ></TileComponent>
        );
      } else {
        board.push(
          <TileComponent
            facing={facing}
            color="#f5c6aa"
            i={i}
            j={j}
            displayTurtle={displayTurtle}
            xLength={xLength}
            key={`${i}+${j}`}
          ></TileComponent>
        );
      }
    }
  }

  return (
    <BoardContainer xLength={xLength} yLength={yLength}>
      {board}
    </BoardContainer>
  );
};

export default Board;
