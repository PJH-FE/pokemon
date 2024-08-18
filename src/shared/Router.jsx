// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";
import { toast } from "react-toastify";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = ({ myPokemon, setMyPokemon }) => {
  // 로컬 스토리지에 나만의 포켓몬 저장
  const saveData = (pokemon) => {
    localStorage.setItem("myPokemon", JSON.stringify(pokemon));
  };

  // 추가 버튼 클릭 시
  const addPokemon = (pokemon) => {
    if (myPokemon.length === 6)
      return toast.error("포켓몬은 최대 6마리까지 등록 가능합니다.");

    if (!!myPokemon.find((item) => item.id === pokemon.id)) {
      toast.error("이미 선택된 포켓몬입니다.", { position: "top-center" });
    } else {
      setMyPokemon([...myPokemon, pokemon]);
      saveData([...myPokemon, pokemon]);
    }
  };

  // 삭제 버튼 클릭 시
  const removePokemon = (pokemon) => {
    const removedMyPokemonList = [...myPokemon].filter((item) => {
      return item.id !== pokemon.id;
    });
    setMyPokemon(removedMyPokemonList);
    saveData(removedMyPokemonList);
  };

  return (
    <BrowserRouter>
      <Layout myPokemon={myPokemon} removePokemon={removePokemon}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex addPokemon={addPokemon} />} />
          <Route
            path="/pokemon-detail"
            element={<PokemonDetail addPokemon={addPokemon} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
