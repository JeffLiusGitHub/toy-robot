import "./App.css";
import InputPage from "./page/InputPage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBoard } from "./store/BoardSlice";
import DisplayPage from "./page/DisplayPage";
import styled from "styled-components";
import IntroductionPage from "./page/IntroductionPage";
import ModalContainer from "./page/ModalContainer";
import OutputPage from "./page/OutputPage";
// import Snackbars from "./Component/Snackbars";
import { laptopXL, tablet, laptop, laptopL } from "./responsive";
import MainTitlePage from "./page/MainTitlePage";
const Container = styled.div`
  display: flex;
  background-color: #fdf6f0;
  height: auto;
  width: 100%;
  height: auto !important;
  min-height: 100%;
  ${laptopXL({})}
  ${laptopL({ flexWrap: "wrap" })}
  ${laptop({ flexWrap: "wrap" })}
  ${tablet({ flexWrap: "wrap" })}
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
  ${laptop({ width: "100%", padding: "0% 5% 10px" })}
`;

function App() {
  const boardSize = { xLength: 5, yLength: 5 };
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    dispatch(setBoard(boardSize));
  }, [boardSize, dispatch]);

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
          <InputPage />
          <OutputPage />
        </Left>
        <Center />
        <Right>
          <DisplayPage />
        </Right>
      </Container>
    </div>
  );
}

export default App;
