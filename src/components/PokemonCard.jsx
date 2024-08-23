import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "./Button";
import { useContext } from "react";
import { CommonContext } from "../context/CommonContext";

const PokemonCard = ({ pokemon, btnType }) => {
  const isLink = `/pokemon-detail?id=${pokemon.id}`;
  const TypeColor = useContext(CommonContext).TypeColor;
  const TypeIcon = useContext(CommonContext).TypeIcon;

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

      <Button pokemon={pokemon} btnType={btnType} />
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
