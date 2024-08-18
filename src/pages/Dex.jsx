import PokemonList from "../components/PokemonList";

const Dex = ({ addPokemon }) => {
  return (
    <>
      <PokemonList addPokemon={addPokemon} />
    </>
  );
};
export default Dex;
