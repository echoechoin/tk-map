import BackgroundVideo from "./BackgroundVedio";
import styled from "@emotion/styled";
import requireAsset from "../../../assets/assets";
import { Typography, Button } from "@mui/material";

const Container = styled.div`
  position: relative; // 相对定位，不会影响其他元素的布局
`;

const Nav = styled.div`
  width: 25%;
  padding-top: ${props => props.theme.spacing(20)};
  display: flex;
  flex-direction: column; // 主轴方向为垂直方向
  align-items: flex-end; // 那么交叉轴方向为水平方向，靠右对齐

  // https://styled-components.com/docs/tooling#styled-theming
  @media (max-width: ${props => props.theme.breakpoints.values.lg}px) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.div`
  border-bottom: solid 3px black;
  display: flex;
  flex-direction: column; // 主轴方向为垂直方向
  align-items: center; // 那么交叉轴方向为水平方向，居中对齐
`;

const SubTitle = styled(Typography)`
  text-transform: uppercase;
  font-weight: bolder;
`;

const Links = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column; // 主轴方向为垂直方向
  align-items: flex-end; // 那么交叉轴方向为水平方向，靠右对齐
`;

const Image = styled.img`
  width: 192px;
`;

const Home = () => {
  return (
    <Container>
      <BackgroundVideo />
      <Nav>
        <Title>
          <Image src={requireAsset('./images/icon.png')} />
          <SubTitle variant='h5'>INTERACTIVE MAPS</SubTitle>
        </Title>
        <Links>
          <Button size="large">STRATEGIC</Button>
          <Button size="large">PAINTER</Button>
          <Button size="large">STARTING POSITION</Button>
        </Links>
      </Nav>
    </Container>
  );
};

export default Home;
