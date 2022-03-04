import React from "react";
import { useSelector } from "react-redux";
import Board from "../Component/Board";

import styled from "styled-components";

function DisplayPage() {
  const DisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    height: 90%;
  `;

  return (
    <DisplayContainer>
      <Board></Board>
    </DisplayContainer>
  );
}

export default DisplayPage;
