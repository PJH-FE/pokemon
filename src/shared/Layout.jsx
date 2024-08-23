import { useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import BgImg from "../assets/background.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Context API에 분리
import MOCK_DATA from "../mock";
import { TypeIcon } from "../setData/TypeIcon";
import { TypeColor } from "../setData/TypeColor";
import { CommonContext } from "../context/CommonContext";

const Footer = styled.div`
  width: 100%;
  padding: 32px 0;
  text-align: center;
  font-size: 12px;
`;

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <CommonContext.Provider value={{ MOCK_DATA, TypeIcon, TypeColor }}>
        <div id="wrap">
          <img src={BgImg} alt="배경" className="bg" />
          <ToastContainer />

          {location.pathname !== "/" && <Dashboard />}

          {children}
        </div>

        <Footer id="footer">Designed by PJH / Icons by ICONS 8</Footer>
      </CommonContext.Provider>
    </>
  );
};
export default Layout;
