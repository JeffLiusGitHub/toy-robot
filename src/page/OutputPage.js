import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import OutputContainer from "../Component/OutputContainer";
import { laptopXL,laptopL } from "../responsive";

const OutPutLayout = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  ${laptopXL({ flexDirection:'column' })}
  ${laptopL({ fontSize: '20px' })}
`;
const OutputPage = () => {
  const { errorArray } = useSelector((state) => state.info);
  const { commandArray } = useSelector((state) => state.info);
  return (
    <OutPutLayout>
      <OutputContainer
        title="command"
        color="#7882a4"
        messageArray={commandArray}
      ></OutputContainer>
      <OutputContainer
        title="error"
        color="#D82148"
        messageArray={errorArray}
      ></OutputContainer>
    </OutPutLayout>
  );
};

export default OutputPage;
