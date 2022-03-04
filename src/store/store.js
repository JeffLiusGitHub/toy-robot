import { configureStore } from "@reduxjs/toolkit";
import robotReducer from "./RobotSlice";
import boardReducer from "./BoardSlice";
import infoReducer from "./InfoSlice";
export default configureStore({
  reducer: {
    robot: robotReducer,
    board: boardReducer,
    info: infoReducer,
  },
});
