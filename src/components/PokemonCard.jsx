import { Link } from "react-router-dom";
import styled from "styled-components";
import { TypeColor } from "../setData/TypeColor";
import { TypeIcon } from "../setData/TypeIcon";
import pokeball from "../assets/pokeball.png";

import { useDispatch, useSelector } from "react-redux";
import { HandleAddPokemon, HandleDelPokemon } from "../redux/modules/myPokemon";

const PokemonCard = ({ pokemon, isSelected }) => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.myPokemon);

  const isLink = `/pokemon-detail?id=${pokemon.id}`;

  return (
    <Card color={TypeColor(pokemon.types[0])}>
      <Link to={isLink} className="pokemonCard">
        <PokemonTypes>
          {pokemon.types.map((type) => {
            return (
              <img src={TypeIcon(type)} alt={type} key={pokemon.id + type} />
            );
          })}
        </PokemonTypes>

        <img className="pokemon" src={pokemon.img_url} alt={pokemon.img_url} />
        <PokemonNo>#{String(pokemon.id).padStart(3, "0")}</PokemonNo>
        <PokemonName>{pokemon.korean_name}</PokemonName>
      </Link>

      {isSelected === false ? (
        <AddBtn
          onClick={(e) => {
            e.preventDefault();
            dispatch(HandleAddPokemon(myPokemon, pokemon));
          }}
          className="addBtn"
        >
          <img src={pokeball} alt="추가" />
        </AddBtn>
      ) : (
        <RemoveBtn
          onClick={(e) => {
            e.preventDefault();
            dispatch(HandleDelPokemon(myPokemon, pokemon));
          }}
          className="removeBtn"
        >
          놓아주기
        </RemoveBtn>
      )}
    </Card>
  );
};
export default PokemonCard;

// 포켓몬별 카드 레이아웃
const Card = styled.div`
  position: relative;
  border-radius: 8px;
  border: 3px solid ${(props) => props.color};
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;

  // 배경 색상
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.color};
    opacity: 0.3;
  }

  // 포켓몬 정보
  a.pokemonCard {
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    text-decoration: none;
    color: #000;

    // 포켓몬 이미지
    .pokemon {
      transition: 0.3s;
    }
    &:hover .pokemon {
      transform: scale(1.2);
    }
  }

  // 놓아주기 & 추가 버튼
  button {
    position: relative;
    z-index: 2;
    width: 80%;
    margin: 4px 0 6px;
    cursor: pointer;
  }
`;

// 포켓몬 타입
const PokemonTypes = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  display: flex;
  gap: 0;
  height: 18px;
  border-radius: 0 0 0 3px;
  overflow: hidden;

  img {
    height: 100%;
    width: auto;
  }
`;

// 포켓몬 번호
const PokemonNo = styled.span`
  font-size: 12px;
`;

// 포켓몬 이름
const PokemonName = styled.div`
  margin-top: 6px;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
`;

// 추가 버튼
const AddBtn = styled.button`
  background: none;
  border: 0;
  outline: none !important;
  cursor: pointer;

  img {
    width: 24px;
  }
  &:hover img {
    animation: pokeball 1.5s infinite;
  }

  // 추가 버튼 애니메이션
  @keyframes pokeball {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(-22deg);
    }
    45% {
      transform: rotate(22deg);
    }
    60% {
      transform: rotate(0deg);
    }
  }
`;

// 삭제버튼
const RemoveBtn = styled.button`
  color: #fff;
  font-weight: 700;
  background-color: #9a9a9a;
  border-radius: 4px;
  border: 0;
  padding: 4px 0;
  margin: 8px 0 10px !important;
  transition: 0.3s;

  &:hover {
    background-color: #ef4036;
  }
`;
