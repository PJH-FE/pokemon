import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListArea = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const PokemonList = ({ myPokemon, setMyPokemon, pokemonList, onClick }) => {
  return (
    <>
      <ListArea>
        {pokemonList.map((pokemon) => {
          return (
            <PokemonCard
              myPokemon={myPokemon}
              setMyPokemon={setMyPokemon}
              key={pokemon.id}
              pokemon={pokemon}
              onClick={onClick}
              isSelected={false}
            />
          );
        })}
      </ListArea>
    </>
  );
};
export default PokemonList;
