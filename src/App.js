import "./App.css";
import InputPage from "./page/InputPage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBoard } from "./store/BoardSlice";
import DisplayPage from "./page/DisplayPage";

import { Button } from "@mui/material";
import styled from "styled-components";
import Campass from "./Component/Campass";
import IntroductionPage from "./page/IntroductionPage";
import ModalContainer from "./page/ModalContainer";
import OutputPage from "./page/OutputPage";
// import Snackbars from "./Component/Snackbars";
import {
  laptopXL,
  mobile,
  tablet,
  laptop,
  laptopL,
  wideScreen,
} from "./responsive";
import MainTitlePage from "./page/MainTitlePage";
const Container = styled.div`
  display: flex;
  background-color: #fdf6f0;
  height: auto;
  /* flex-wrap: wrap; */
  width: 100%;
  height: auto !important;
  min-height: 100%;
  ${laptopXL({ })}
  ${laptopL({ flexWrap: 'wrap' })}
  ${laptop({  flexWrap: 'wrap'})}
  ${tablet({flexWrap: 'wrap' })}
`;
const Left = styled.div`
  width: 35%;
  padding: 5% 5% 10px;
  ${laptopXL({ width: "25%" })}
  ${laptopL({ width: "20%" })}
  ${laptop({ width: "90%" })}
  ${tablet({ width: "100%" })}
`;
const Center = styled.div`
  width: 5%;
  ${laptopXL({ display: "none" })}

  ${laptopL({ width: "10%" })}
${laptop({ display: "none" })}
${tablet({ display: "none" })}
`;
const Right = styled.div`
  width: 60%;
  ${laptop({ width:'100%',padding: "0% 5% 10px" })}
`;
const OutPutContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

function App() {
  const boardSize = { xLength: 5, yLength: 5 };
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    dispatch(setBoard(boardSize));
  }, []);
  const { xLength, yLength, facingToward } = useSelector(
    (state) => state.board
  );
  return (
    <div>
      <MainTitlePage></MainTitlePage>
      <Container>

        <Left>
          <IntroductionPage handleOpen={handleOpen}> </IntroductionPage>

          <ModalContainer
            open={open}
            handleClose={handleClose}
          ></ModalContainer>

          <InputPage></InputPage>
          <OutputPage></OutputPage>
        </Left>
        <Center></Center>
        <Right>
          <DisplayPage></DisplayPage>
        </Right>
      </Container>
    </div>
  );
}

export default App;
