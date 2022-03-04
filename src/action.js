import { axisIsValid, facingIsValid } from "./validation";
import { placeRobot, rotateRobot, moveRobot } from "./store/RobotSlice";
import { setCommand, setError } from "./store/InfoSlice";

export const place = (
  dispatch,
  inputCommand,
  xLength,
  yLength,
  facingToward
) => {
  const inputValue = inputCommand.split(" ");
  if (inputValue[2]) {
    return dispatch(setError({ error: "do not add space before facing" }));
  }
  console.log(inputCommand);
  if (inputValue[1] === undefined) {
    return dispatch(setError({ error: "please also enter axis and facing" }));
  }
  const inputArray = inputValue[1]?.split(",");
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
  if (
    axisIsValid(dispatch, axisX, xLength) &&
    axisIsValid(dispatch, axisY, yLength) &&
    facingIsValid(dispatch, facing, facingToward)
  ) {
    dispatch(setCommand({ command: `PLACE ${inputValue[1]}` }));
    dispatch(placeRobot({ axisX, axisY, facing }));
  } else {
    return dispatch(
      setError({
        error: "the input error, please check your input",
      })
    );
  }
};

export const rotate = (dispatch, direction, facing, facingToward) => {
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
      dispatch(setError({ error: "saved facing got problem" }));
    }
  } else {
    dispatch(setError({ error: "Wrong direction command" }));
  }
};

export const move = (dispatch, facing, axisX, axisY, xLength, yLength) => {
  let newAxisY, newAxisX;
  let error =
    "you cannot move any more.its already on the boundary of the board";
  let hasError = false;
  switch (facing) {
    default:
      hasError = true;
      error = "No facing data could be found. Place the robot first.";
      break;
    case "NORTH":
      newAxisY = axisY + 1;
      if (axisIsValid(dispatch, newAxisY, yLength)) {
        dispatch(setCommand({ command: "MOVE" }));
        dispatch(moveRobot({ axisX: axisX, axisY: newAxisY }));
      } else {
        hasError = true;
      }
      break;
    case "SOUTH":
      newAxisY = axisY - 1;
      if (axisIsValid(dispatch, newAxisY, yLength)) {
        dispatch(setCommand({ command: "MOVE" }));
        dispatch(moveRobot({ axisX: axisX, axisY: newAxisY }));
      } else {
        hasError = true;
      }
      break;
    case "EAST":
      newAxisX = axisX + 1;
      if (axisIsValid(dispatch, newAxisX, xLength)) {
        dispatch(setCommand({ command: "MOVE" }));
        dispatch(moveRobot({ axisX: newAxisX, axisY: axisY }));
      } else {
        hasError = true;
      }
      break;
    case "WEST":
      newAxisX = axisX - 1;
      if (axisIsValid(dispatch, newAxisX, xLength)) {
        dispatch(setCommand({ command: "MOVE" }));
        dispatch(moveRobot({ axisX: newAxisX, axisY: axisY }));
      } else {
        hasError = true;
      }
      break;
  }
  if (hasError) {
    dispatch(setError({ error: error }));
  }
};

export const report = (axisX, axisY, facing) => {
  return { axisX, axisY, facing };
};
