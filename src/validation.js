import {  setCommand, setError, setOpen } from "./store/InfoSlice";
// import {setSnackBarError,setSnackBarCommand} from'./Component/Snackbars'
export const axisIsValid = (dispatch,axis, length) => {
  // if (typeof axis !== "number"&&isNaN(axis))
  if (isNaN(axis)) {
    // setSnackBarError(dispatch,'axis is invalid,should be a number')
    dispatch(setError({ error: "axis is invalid,should be a number"}));
    console.log("axis is invalid,should be a number");
    return false;
  }
  if (isNaN(length)) {
    dispatch(setError({ error:"board length is invalid"}));
    console.log("board length is invalid");
    return false;
  }
  if (axis === -1) {
    dispatch(setError({ error:"robot cannot be placed or moved outside of the board"}));
    console.log(
      "please place the robot on the board before taking any other actions"
    );
    //todo input already -1
  } else if (axis < 0 || axis > length-1) {
    dispatch(setError({ error:"cannot put robot out of table"}));
    console.log("cannot put robot out of table");
    return false;
    //todo more condition to be judge (avoidance)
  } else {
    return true;
  }
};



export const facingIsValid = (dispatch,facing,facingToward) => {
    // console.log(facingToward)
    // console.log(facingToward.includes(facing))
  if (facingToward.includes(facing)) {
    return true;
  } else {
    dispatch(setError({ error:"Place the robot first, Facing input is invalid."}));
    console.log("Facing input is invalid.");
    return false;
  }
};
