import { axisIsValid, facingIsValid } from "./validation";
import {
  placeRobot,
  rotateRobot,
  moveRobot,
  reportRobot,
} from "./store/RobotSlice";
import { setCommand, setError } from "./store/InfoSlice";

export const place = (
  dispatch,
  inputCommand,
  xLength,
  yLength,
  facingToward
) => {
  const inputValue = inputCommand.split(" ");
  console.log(inputValue);
  if (inputValue[2]) {
    return dispatch(setError({ error: "do not add space before facing" }));
  }
  console.log(inputCommand);
  if (inputValue[1] === undefined) {
    return dispatch(setError({ error: "please also enter axis and facing" }));
  }
  const inputArray = inputValue[1]?.split(",");
  console.log(inputArray.length);
  if (inputArray.length !== 3) {
    return dispatch(
      setError({
        error: "should enter X,Y,and Facing, also notice input format.",
      })
    );
  }
  const axisX = parseInt(inputArray[0]?.trim());
  const axisY = parseInt(inputArray[1]?.trim());
  const facing = inputArray[2]?.toUpperCase().trim();

  console.log({ facing });
  if (
    axisIsValid(dispatch, axisX, xLength) &&
    axisIsValid(dispatch, axisY, yLength) &&
    facingIsValid(dispatch, facing, facingToward)
  ) {
    // console.log(input)
    dispatch(setCommand({ command: `PLACE ${inputValue[1]}` }));
    dispatch(placeRobot({ axisX, axisY, facing }));
  } else {
    console.log("the input error, please check your input");
  }
};

export const rotate = (dispatch, direction, facing, facingToward) => {
  //   const facingToward = ["NORTH", "EAST", "SOUTH", "WEST"];

  const index = facingToward.indexOf(facing);

  if (!facingIsValid(dispatch, facing, facingToward)) {
    return console.log("invalid facing");
  }
  if (direction === "LEFT") {
    if (index > 0) {
      facing = facingToward[index - 1];
      dispatch(setCommand({ command: "LEFT" }));
      dispatch(rotateRobot({ facing }));
      return;
    }
    if (index === 0) {
      dispatch(setCommand({ command: "LEFT" }));
      dispatch(rotateRobot({ facing: facingToward[facingToward.length - 1] }));
      return;
    }
    if (index < 0) {
      return console.log("saved facing got problem");
    }
  } else if (direction === "RIGHT") {
    if (index < facingToward.length - 1 && index >= 0) {
      dispatch(setCommand({ command: "RIGHT" }));
      return dispatch(rotateRobot({ facing: facingToward[index + 1] }));
    }
    if (index === facingToward.length - 1) {
      dispatch(setCommand({ command: "RIGHT" }));
      return dispatch(rotateRobot({ facing: facingToward[0] }));
    }
    if (index < 0) {
      return console.log("saved facing got problem");
    }
  } else {
    return console.log("Wrong direction command");
  }
};

export const move = (dispatch, facing, axisX, axisY, xLength, yLength) => {
  let newAxisY, newAxisX;
  let error = "";
  switch (facing) {
    default:
      dispatch(
        setError({
          error: "No facing data could be found. Place the robot first.",
        })
      );
      error = "No facing data could be found. Place the robot first.";
      break;
    case "NORTH":
      newAxisY = axisY + 1;
      if (axisIsValid(dispatch, newAxisY, yLength)) {
        dispatch(setCommand({ command: "MOVE" }));
        dispatch(moveRobot({ axisX: axisX, axisY: newAxisY }));
      } else {
        dispatch(
          setError({
            error:
              "you cannot move any more.its already on the boundary of the board",
          })
        );
        error =
          "you cannot move any more.its already on the boundary of the board";
      }
      break;
    case "SOUTH":
      newAxisY = axisY - 1;
      if (axisIsValid(dispatch, newAxisY, yLength)) {
        dispatch(setCommand({ command: "MOVE" }));
        dispatch(moveRobot({ axisX: axisX, axisY: newAxisY }));
      } else {
        dispatch(
          setError({
            error:
              "you cannot move any more.its already on the boundary of the board",
          })
        );
        error =
          "you cannot move any more.its already on the boundary of the board";
      }
      break;
    case "EAST":
      newAxisX = axisX + 1;
      if (axisIsValid(dispatch, newAxisX, xLength)) {
        dispatch(setCommand({ command: "MOVE" }));
        dispatch(moveRobot({ axisX: newAxisX, axisY: axisY }));
      } else {
        dispatch(
          setError({
            error:
              "you cannot move any more.its already on the boundary of the board",
          })
        );
        error =
          "you cannot move any more.its already on the boundary of the board";
      }
      break;
    case "WEST":
      newAxisX = axisX - 1;
      if (axisIsValid(dispatch, newAxisX, xLength)) {
        dispatch(setCommand({ command: "MOVE" }));
        dispatch(moveRobot({ axisX: newAxisX, axisY: axisY }));
      } else {
        dispatch(
          setError({
            error:
              "you cannot move any more.its already on the boundary of the board",
          })
        );
        error =
          "you cannot move any more.its already on the boundary of the board";
      }
      break;
  }
  if (error !== "") {
    console.log(error);
  }
};

export const report = (axisX, axisY, facing) => {
  return { axisX, axisY, facing };
};
