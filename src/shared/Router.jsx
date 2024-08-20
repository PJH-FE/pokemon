// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import Dex from "../pages/Dex";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
