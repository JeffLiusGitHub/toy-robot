import styled from "styled-components";
import { mobile, tablet, laptopL, laptopXL } from "../responsive";
import ExploreIcon from "@mui/icons-material/Explore";
import SmartToyIcon from "@mui/icons-material/SmartToy";
const MainTitleContainer = styled.div`
  padding-top: 60px;
`;
const Title = styled.div`
  color: #335d2d;
  font-weight: 900;
  font-size: 50px;
  margin-bottom: 15px;
  text-align: center;

  ${laptopXL({ fontSize: "35px" })}
  ${laptopL({ fontSize: "30px" })}
${tablet({ fontSize: "25px" })}
${mobile({ fontSize: "20px" })}
`;
const IconContainer = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
const MainTitlePage = () => {
  return (
    <MainTitleContainer>
      <Title>
        <IconContainer>
          <SmartToyIcon
            sx={{ fontSize: { sm: "18px", md: "20px", lg: "35px" } }}
          ></SmartToyIcon>
        </IconContainer>
        Toy Robot simulator
        <IconContainer>
          <ExploreIcon
            sx={{ fontSize: { sm: "18px", md: "20px", lg: "35px" } }}
          ></ExploreIcon>
        </IconContainer>
      </Title>
    </MainTitleContainer>
  );
};

export default MainTitlePage;
