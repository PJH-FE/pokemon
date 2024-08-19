import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div id="home">
      <img src={Logo} alt="로고" />
      <Link to="/dex">포켓몬 도감 시작하기</Link>
    </div>
  );
};
export default Home;
