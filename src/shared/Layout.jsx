import Dashboard from "../components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, myPokemon, removePokemon }) => {
  return (
    <>
      <ToastContainer />
      <Dashboard myPokemon={myPokemon} removePokemon={removePokemon} />
      {children}
    </>
  );
};
export default Layout;
