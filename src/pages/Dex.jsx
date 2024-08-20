import MOCK_DATA from "../mock";
import PokemonCard from "../components/PokemonCard";
import styled from "styled-components";

const PokemonList = () => {
  return (
    <PokemonDex>
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={false} />
        );
      })}
    </PokemonDex>
  );
};
export default PokemonList;

const PokemonDex = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 24px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.3);

  > div {
    width: calc((100% / 7) - (96px / 7));

    @media (max-width: 1080px) {
      & {
        width: calc((100% / 5) - (72px / 5));
      }
    }
    @media (max-width: 720px) {
      & {
        width: calc((100% / 3) - (32px / 3));
      }
    }
  }
`;
