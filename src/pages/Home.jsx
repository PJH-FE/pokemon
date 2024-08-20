import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeDiv>
      <img src={Logo} alt="로고" />
      <Link to="/pokemon/dex">포켓몬 도감 시작하기</Link>
    </HomeDiv>
  );
};
export default Home;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 76px);
  img {
    height: 180px;
  }
  a {
    display: block;
    width: fit-content;
    padding: 12px 16px;
    margin: 24px auto 0;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    background-color: #ef4036;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
`;
