import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ myPokemon, setMyPokemon }) => {
  const removePokemon = (pokemon) => {
    setMyPokemon(
      [...myPokemon].filter((item) => {
        return item.id !== pokemon.id;
      })
    );
  };
  return (
    <div>
      <h2>나만의 포켓몬</h2>
      {myPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다</p>
      ) : (
        <ul>
          {myPokemon.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.korean_name}
                pokemon={pokemon}
                onClick={removePokemon}
                isSelected={true}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Dashboard;
