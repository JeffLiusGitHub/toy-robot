
import styled from "styled-components";
import { laptopXL } from "../responsive";
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const OutputLayout = styled.div`
  width: 50%;
  background-color: #eeedde;
  margin: 10px;
  height: 500px;
  border-radius: 5px;
  overflow: scroll;
  ${laptopXL({ width:'100%',height:'225px' })}
`;
const OutputMessage = styled.div`
  color: ${(props)=>props.color};
  margin-top: 6px;
  font-weight: 900;
  font-size: 15px;
  margin-left:10px;

`;
const OutputTitle = styled.div`
  color: #335d2d;
  margin:2px auto;
  text-align:center;
  font-weight: 900;
  font-size: 25px;
`;
const IconContainer = styled.span`
/* display:flex;
justify-content:center;
align-items:center; */
`
const OutPutContainer = ({ title, color, messageArray }) => {
const icon = (title==='command')?<CheckCircleIcon sx={{color:'#335d2d',fontSize:'15px',mr:1}}/>:<ErrorIcon sx={{fontSize:'15px',mr:1}}/>
  
  const Message = messageArray.map((message) => (
    <OutputMessage color={color}><IconContainer>{icon}</IconContainer>{message}</OutputMessage>
  ));
  return (
    <OutputLayout>
      <OutputTitle>{title}</OutputTitle>
      {Message}
    </OutputLayout>
  );
};

export default OutPutContainer;
