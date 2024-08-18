import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (myPokemon.length === 6)
      return alert("포켓몬은 최대 6마리까지 등록 가능합니다.");

    !!myPokemon.find((item) => item === pokemon)
      ? alert("이미 선택된 포켓몬입니다.")
      : setMyPokemon([...myPokemon, pokemon]);
  };

  return (
    <>
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
