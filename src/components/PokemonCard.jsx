import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid black;
  width: 100px;
  height: 100px;
`;

const PokemonCard = ({
  myPokemon,
  setMyPokemon,
  pokemon,
  onClick,
  isSelected,
}) => {
  const isLink = `/pokemon-detail?id=${pokemon.id}`;
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(isLink, {
      state: { myPokemon },
    });
  };

  return (
    <Card>
      <img src={pokemon.img_url} alt={pokemon.img_url} onClick={goToDetail} />
      {isSelected === false ? (
        <button
          onClick={() => {
            onClick(pokemon);
          }}
        >
          추가
        </button>
      ) : (
        <button
          onClick={() => {
            onClick(pokemon);
          }}
        >
          삭제
        </button>
      )}
    </Card>
  );
};
export default PokemonCard;
