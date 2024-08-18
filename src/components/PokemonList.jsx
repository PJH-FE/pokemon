import styled from "styled-components";
import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";

const ListArea = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const PokemonList = ({ addPokemon }) => {
  return (
    <>
      <ListArea>
        {MOCK_DATA.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              clickEvent={addPokemon}
              isSelected={false}
            />
          );
        })}
      </ListArea>
    </>
  );
};
export default PokemonList;
