import { useState } from "react";
import { move, place, rotate } from "../action";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCommand, setError } from "../store/InfoSlice";
import { laptopXL, laptopL, tablet, mobile } from "../responsive";
import Campass from "../Component/Compass";
const InputPageContainer = styled.div`
  padding: 10px 15px 0 15px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: #335d2d;
  margin-bottom: 25px;
  ${laptopXL({ fontSize: "25px" })}
  ${laptopL({ fontSize: "20px" })}
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 3px;
  border-color: #6ebf8b;
  height: 50px;
  font-size: 25px;
  text-overflow: ellipsis;
  ${laptopXL({ fontSize: "20px" })}
  ${laptopL({ fontSize: "15px" })}
  ${tablet({ fontSize: "15px" })}
  ${mobile({ fontSize: "20px" })}
  ::placeholder {
    color: rgba(136, 179, 208, 0.537);
    font-size: 25px;
    text-overflow: ellipsis;
    ${laptopXL({ fontSize: "20px" })}
    ${laptopL({ fontSize: "15px" })}
    ${tablet({ fontSize: "15px" })}
    ${mobile({ fontSize: "20px" })}
  }
`;

function InputPage() {
  const [inputValue, setInputValue] = useState("");
  const { xLength, yLength, facingToward } = useSelector(
    (state) => state.board
  );
  const { axisX, axisY, facing } = useSelector((state) => state.robot);
  const dispatch = useDispatch();
  const runInputCommand = (inputValue) => {
    const command = inputValue.split(" ")[0];
    if (command === "PLACE") {
      return place(dispatch, inputValue, xLength, yLength, facingToward);
    }
    if (command === "MOVE") {
      return move(dispatch, facing, axisX, axisY, xLength, yLength);
    }
    if (command === "RIGHT" || command === "LEFT") {
      return rotate(dispatch, command, facing, facingToward);
    }
    if (command === "REPORT") {
      if (axisX === -1 && axisY === -1 && facing === "") {
        return dispatch(
          setError({ error: "cannot report the axis before initializing" })
        );
      }
      return dispatch(
        setCommand({
          command: `axisX: ${axisX} axisY: ${axisY} facing:${facing}`,
        })
      );
    } else {
      dispatch(setError({ error: "Please check your command" }));
    }
  };
  return (
    <InputPageContainer>
      <TitleContainer>
        <Title>Command Here ...</Title>
        <Campass />
      </TitleContainer>
      <Input
        placeholder="Please type your command here..."
        value={inputValue.toUpperCase()}
        onChange={(event) => setInputValue(event.target.value.toUpperCase())}
        onKeyPress={(event) =>
          event.key === "Enter" ? runInputCommand(inputValue) : null
        }
      ></Input>
    </InputPageContainer>
  );
}

export default InputPage;
