// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import Dex from "../pages/Dex";

const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/pokemon" element={<Home />} />
          <Route path="/pokemon/dex" element={<Dex />} />
          <Route path="/pokemon/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
