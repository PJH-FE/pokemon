import { useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import BgImg from "../assets/background.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  padding: 32px 0;
  text-align: center;
  font-size: 12px;
`;

const Layout = ({ children, myPokemon, removePokemon }) => {
  const location = useLocation();

  return (
    <>
      <div id="wrap">
        <img src={BgImg} alt="배경" className="bg" />
        <ToastContainer />

        {location.pathname !== "/" && (
          <Dashboard myPokemon={myPokemon} removePokemon={removePokemon} />
        )}

        {children}
      </div>

      <Footer id="footer">Designed by PJH / Icons by ICONS 8</Footer>
    </>
  );
};
export default Layout;
