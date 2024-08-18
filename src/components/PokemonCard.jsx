import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`;

const StName = styled.h4`
  color: #fff;
`;

const typeColor = (type) => {
  switch (type) {
    case "불꽃":
      return "#E56C3E";
    case "물":
      return "#5185C5";
    case "풀":
      return "#66A945";
    case "전기":
      return "#FBB917";
    case "벌레":
      return "#9FA244";
    case "격투":
      return "#E09C40";
    case "독":
      return "#735198";
    case "땅":
      return "#9C7743";
    case "바위":
      return "#BFB889";
    case "비행":
      return "#A2C3E7";
    case "에스퍼":
      return "#DD6B7B";
    case "고스트":
      return "#684870";
    case "얼음":
      return "#6DC8EB";
    case "드래곤":
      return "#535CA8";
    case "페어리":
      return "#DAB4D4";
    default:
      return "#949495";
  }
};

const PokemonCard = ({ pokemon, clickEvent, isSelected }) => {
  const isLink = `/pokemon-detail?id=${pokemon.id}`;

  return (
    <Card color={typeColor(pokemon.types[0])}>
      <Link to={isLink}>
        <img src={pokemon.img_url} alt={pokemon.img_url} />
      </Link>

      <StName>{pokemon.korean_name}</StName>

      {isSelected === false ? (
        <button
          onClick={() => {
            clickEvent(pokemon);
          }}
        >
          추가
        </button>
      ) : (
        <button
          onClick={() => {
            clickEvent(pokemon);
          }}
        >
          삭제
        </button>
      )}
    </Card>
  );
};
export default PokemonCard;
