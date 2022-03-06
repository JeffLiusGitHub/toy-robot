import { setError } from "./store/InfoSlice";

export const axisIsValid = (dispatch, axis, length) => {
  if (isNaN(axis)) {
    dispatch(setError({ error: "axis is invalid,should be a number" }));
    return false;
  }
  if (isNaN(length)) {
    dispatch(setError({ error: "board length is invalid" }));
    return false;
  }
  if (axis === -1) {
    dispatch(
      setError({
        error: "robot cannot be placed or moved outside of the board",
      })
    );
    //todo input already -1
  } else if (axis < 0 || axis > length - 1) {
    dispatch(setError({ error: "cannot put robot out of table" }));
    return false;
    //todo more condition to be judge (avoidance)
  } else {
    return true;
  }
};

export const facingIsValid = (dispatch, facing, facingToward) => {
  if (facingToward.includes(facing)) {
    return true;
  } else {
    dispatch(
      setError({ error: "Place the robot first, Facing input is invalid." })
    );
    return false;
  }
};
