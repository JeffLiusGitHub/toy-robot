import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import userEvent from "@testing-library/user-event";
import styled from "styled-components";
// import renderer from 'react-test-renderer'
import "jest-styled-components";

describe("test code if user have not place the robot", () => {
  test("type MOVE command then pressing enter, expect No facing data could be found. Place the robot first.", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(
      /No facing data could be found. Place the robot first./i
    );
    userEvent.type(inputValue, "MOVE{enter}");
    expect(displayText).toBeInTheDocument();
  });

  test("type LEFT command then pressing enter, expect Place the robot first, Facing input is invalid.", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(
      /Place the robot first, Facing input is invalid./i
    );
    userEvent.type(inputValue, "LEFT{enter}");
    expect(displayText).toBeInTheDocument();
  });

  test("type RIGHT command then pressing enter, expect Place the robot first, Facing input is invalid.", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(
      /Place the robot first, Facing input is invalid./i
    );
    userEvent.type(inputValue, "RIGHT{enter}");
    expect(displayText).toBeInTheDocument();
  });

  test("type REPORT command then pressing enter, expect cannot report the axis before initializing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(
      /cannot report the axis before initializing/i
    );
    userEvent.type(inputValue, "REPORT{enter}");
    expect(displayText).toBeInTheDocument();
  });
});

describe("test code if user have already place the robot", () => {
  test("PLACE robot correctly, expect turtle image on the board, the corresponding axis will not be rendered", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const turtleImage = screen.getByRole("img");
    const notDisplayText = screen.getByText(/[2,1]/);
    const displayText = screen.getByText(/PLACE 2,1,NORTH/);
    userEvent.type(inputValue, "PLACE 2,1,NORTH{enter}");
    expect(displayText).toBeInTheDocument();
    expect(notDisplayText).not.toBeInTheDocument();
    expect(turtleImage).toBeInTheDocument();
  });

  test("PLACE robot correctly, type MOVE command then pressing enter, expect display MOVE command and corresponding axis of the robot", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const turtleImage = screen.getByRole("img");
    const displayText = screen.getByText(/MOVE/i);
    userEvent.type(inputValue, "PLACE 2,1,NORTH{enter}");
    userEvent.type(inputValue, "MOVE{enter}");
    const notDisplayText = screen.getByText(/[2,2]/);
    expect(notDisplayText).not.toBeInTheDocument();
    expect(displayText).toBeInTheDocument();
    expect(turtleImage).toBeInTheDocument();
  });
  //jest test image transform rotate?
  test("PLACE robot correctly, type LEFT command then pressing enter,expect turtle turn left.", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(/LEFT/i);
    const turtleImage = screen.getByRole("img");
    userEvent.type(inputValue, "PLACE 2,1,NORTH{enter}");
    userEvent.type(inputValue, "LEFT{enter}");
    expect(displayText).toBeInTheDocument();
    expect(turtleImage).toHaveStyleRule("transform", "rotate(270deg)");
  });

  test("PLACE robot correctly, type RIGHT command then pressing enter,expect turtle turn left.", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(/RIGHT/i);
    const turtleImage = screen.getByRole("img");
    userEvent.type(inputValue, "PLACE 2,1,NORTH{enter}");
    userEvent.type(inputValue, "RIGHT{enter}");
    expect(displayText).toBeInTheDocument();
    expect(turtleImage).toHaveStyleRule("transform", "rotate(90deg)");
  });

  test("type REPORT command then pressing enter, expect axisX: 2 axisY: 2 facing:NORTH", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(/axisX: 2 axisY: 2 facing:NORTH/i);
    userEvent.type(inputValue, "PLACE 2,1,NORTH{enter}");
    userEvent.type(inputValue, "REPORT{enter}");
    expect(displayText).toBeInTheDocument();
  });
});

describe("test error input", () => {
  test("type randomly character, expect Please check your command.", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(/Please check your command/i);
    userEvent.type(inputValue, "HJKHKJHK{enter}");
    expect(displayText).toBeInTheDocument();
  });

  test("PLACE input without typing comma, expect do not add space before facing.", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(
      /expect do not add space before facing/i
    );
    userEvent.type(inputValue, "PLACE 2 1 NORTH{enter}");
    expect(displayText).toBeInTheDocument();
  });

  test("PLACE with wrong facing name, expect Place the robot first, Facing input is invalid.the input error, please check your input", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(
      /Place the robot first, Facing input is invalid/i
    );

    userEvent.type(inputValue, "PLACE 2,1,UP{enter}");
    expect(displayText).toBeInTheDocument();
  });

  test("PLACE without any attribute,expect please also enter axis and facing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(/please also enter axis and facing/i);

    userEvent.type(inputValue, "PLACE{enter}");
    expect(displayText).toBeInTheDocument();
  });
});

describe("invalid movement", () => {
  test("PLACE the robot outside of the board, expect the input error, please check your input.", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(/cannot put robot out of table/i);
    userEvent.type(inputValue, "PLACE 5,5,NORTH{enter}");
    expect(displayText).toBeInTheDocument();
  });

  test("MOVE robot outside of the table, expect you cannot move any more.its already on the boundary of the board", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputValue = screen.getByRole("textbox");
    const displayText = screen.getByText(
      /you cannot move any more.its already on the boundary of the board/i
    );
    userEvent.type(inputValue, "PLACE 4,4,NORTH{enter}");
    userEvent.type(inputValue, "MOVE{enter}");
    expect(displayText).toBeInTheDocument();
  });
});

test("button details", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const buttonElement = screen.getByRole("button");
  const displayText = screen.getByText(
    /The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. There are no other obstructions on the table surface./i
  );
  userEvent.click(buttonElement);
  expect(displayText).toBeInTheDocument();
});
