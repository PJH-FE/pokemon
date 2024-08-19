import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";
import "../styles/Dex.css";

const PokemonList = ({ addPokemon }) => {
  return (
    <div className="dexList">
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
    </div>
  );
};
export default PokemonList;
