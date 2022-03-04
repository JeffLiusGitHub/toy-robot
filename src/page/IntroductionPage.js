import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { mobile,tablet,laptopXL,laptopL } from "../responsive";
const IntroContainer = styled.div`
  /* padding: 15% 25px 0 25px; */
  /* margin:100px,5%; */
`;
// const Title = styled.div`
//   color: #335d2d;
//   font-weight: 900;
//   font-size: 50px;
//   margin-bottom: 15px;
//   text-align:center;
//   ${laptopXL({ fontSize: '35px' })}
//   ${laptopL({ fontSize: '30px' })}
//   ${tablet({ fontSize: '25px' })}
//   ${mobile({ fontSize: '20px' })}
// `;
const Code = styled.span`
  color: #019267;
  font-weight: 700;
  margin-bottom: 4px;
  ${laptopXL({ fontSize: '25px' })}
  ${laptopL({ fontSize: '14px' })}
  ${tablet({fontSize: '20px'})}
`;
const Content = styled.p`
  color: #7ea04d;
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 30px;
  ${laptopXL({ fontSize: '25px' })}
  ${laptopL({ fontSize: '14px' })}
  ${tablet({fontSize: '20px'})}
`;

const ButtonContainer = styled.div`
margin-top:20px;
text-align:right;
margin-right:10px;
margin-bottom:10px;
`;

const IntroductionPage = ({ handleOpen }) => {
  return (
    <IntroContainer>
      
      <Content>The Robot can read in commands of the following form </Content>
      <Content>
        <Code>PLACE X,Y,F</Code>, <Code>MOVE</Code>, <Code>LEFT</Code>, 
        <Code>RIGHT</Code>, <Code>REPORT</Code>
      </Content>
      <Content>Check the button to see more details.</Content>
      <ButtonContainer>    <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ backgroundColor: "#019267" }}
      ><HelpOutlineIcon sx={{mr:'5px'}}></HelpOutlineIcon>
        Instruction
      </Button></ButtonContainer>
  
    </IntroContainer>
  );
};

export default IntroductionPage;
