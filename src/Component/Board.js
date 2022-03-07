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
  background-color: #fdf6f0;
  ${wideScreen({ width: "1000px", height: "1000px" })}
  ${laptopXL({ width: "900px", height: "900px" })}
  ${laptopL({ width: "800px", height: "800px" })}
  ${laptop({ width: "800px", height: "800px" })}
  ${tablet({ width: "600px", height: "600px" })} 
  ${mobile({ width: "400px", height: "400px" })}
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
      }
      board.push(
        <TileComponent
          key={`${i},${j}`}
          facing={facing}
          color={number % 2 === 0 ? "#F8E2CF" : "#f5c6aa"}
          i={i}
          j={j}
          displayTurtle={displayTurtle}
          xLength={xLength}
        />
      );
    }
  }

  return (
    <BoardContainer xLength={xLength} yLength={yLength}>
      {board}
    </BoardContainer>
  );
};

export default Board;
