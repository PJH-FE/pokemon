import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const MyPokemon = styled.div`
  display: flex;
`;

const Dashboard = ({ myPokemon, removePokemon }) => {
  return (
    <div>
      <h2>나만의 포켓몬</h2>
      {myPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다</p>
      ) : (
        <MyPokemon>
          {myPokemon.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.korean_name}
                pokemon={pokemon}
                clickEvent={removePokemon}
                isSelected={true}
              />
            );
          })}
        </MyPokemon>
      )}
    </div>
  );
};
export default Dashboard;
