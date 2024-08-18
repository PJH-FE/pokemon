import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);
  // 상세에서 마이 포켓몬을 state로 받아와서 출력
  const location = useLocation();
  useEffect(() => {
    if (location.state !== null) {
      const myPokemon2 = location.state.myPokemon;
      setMyPokemon([...myPokemon, ...myPokemon2]);
    }
  }, []);

  // 추가 버튼 클릭 시
  const addPokemon = (pokemon) => {
    if (myPokemon.length === 6)
      return toast.error("포켓몬은 최대 6마리까지 등록 가능합니다.");

    !!myPokemon.find((item) => item.id === pokemon.id)
      ? toast.error("이미 선택된 포켓몬입니다.", { position: "top-center" })
      : setMyPokemon([...myPokemon, pokemon]);
  };

  return (
    <>
      <ToastContainer />
      <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      <PokemonList
        myPokemon={myPokemon}
        setMyPokemon={setMyPokemon}
        pokemonList={MOCK_DATA}
        onClick={addPokemon}
      />
    </>
  );
};
export default Dex;
