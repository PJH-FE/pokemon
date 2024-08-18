import PokemonCard from "./PokemonCard";

const PokemonList = ({ myPokemon, setMyPokemon, pokemonList, onClick }) => {
  return (
    <>
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
    </>
  );
};
export default PokemonList;
