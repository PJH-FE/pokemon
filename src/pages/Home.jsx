import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <Link to="/dex">포켓몬 도감 시작하기</Link>
    </div>
  );
};
export default Home;
