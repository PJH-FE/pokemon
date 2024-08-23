import { Link, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

// 스타일 관련
import styled from "styled-components";
import { TypeIcon } from "../setData/TypeIcon";
import { TypeColor } from "../setData/TypeColor";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

import Button from "../components/Button";

const PokemonDetail = () => {
  // Query String 가져온 뒤, 같은 아이디의 포켓몬 출력
  const [searchParams, setSearchParams] = useSearchParams();
  const nowPokemonId = Number(searchParams.get("id"));
  const pokemon = MOCK_DATA.find((item) => item.id === nowPokemonId);

  // 다음 버튼 클릭시 다음 아이디 번호값의 포켓몬 출력
  const nextLink =
    nowPokemonId === MOCK_DATA.length
      ? `/pokemon-detail?id=1`
      : `/pokemon-detail?id=${nowPokemonId + 1}`;

  // 이전 버튼 클릭시 이전 아이디 번호값의 포켓몬 출력
  const prevLink =
    nowPokemonId === 1
      ? `/pokemon-detail?id=${MOCK_DATA.length}`
      : `/pokemon-detail?id=${nowPokemonId - 1}`;

  return (
    <DetailArea>
      <Box color={TypeColor(pokemon.types[0])} className="box">
        <img src={pokemon.img_url} alt={pokemon.korean_name} />

        <PokemonInfo color={TypeColor(pokemon.types[0])}>
          <span className="no">#{String(pokemon.id).padStart(3, "0")}</span>
          <div className="name">{pokemon.korean_name}</div>

          <PokemonType>
            {pokemon.types.map((type) => {
              return (
                <span key={type}>
                  <img src={TypeIcon(type)} alt={type} />
                  {type}
                </span>
              );
            })}
          </PokemonType>

          <div className="description">{pokemon.description}</div>

          <Button pokemon={pokemon} btnType="detailAdd" />
        </PokemonInfo>
      </Box>

      <Link to={prevLink} className="arrow prev">
        prev
      </Link>
      <Link to={nextLink} className="arrow next">
        next
      </Link>

      <Link to="/dex" className="goList">
        목록으로 돌아가기
      </Link>
    </DetailArea>
  );
};
export default PokemonDetail;

// 상세페이지 전체 영역
const DetailArea = styled.div`
  position: relative;

  a.arrow {
    display: block;
    width: 64px;
    height: 64px;
    position: absolute;
    top: calc((100% - 90px) / 2);
    transform: translateY(-50%);
    font-size: 0;
    &.prev {
      left: 0;
      background: url(${leftArrow}) no-repeat center / 100%;
    }
    &.next {
      right: 0;
      background: url(${rightArrow}) no-repeat center/ 100%;
    }
  }

  a.goList {
    display: block;
    width: fit-content;
    padding: 12px 16px;
    margin: 48px auto;
    font-size: 18px;
    line-height: 1;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    background-color: #fff;
    color: #1a1a1a;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }

  a.goList:hover {
    background-color: #1a1a1a;
    color: #fff;
  }
`;

// 포켓몬 소개 영역
const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border: 3px solid ${(props) => props.color};
  border-radius: 16px;

  > img {
    height: 150px;
  }
`;

// 포켓몬 정보
const PokemonInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  border-left: 3px solid ${(props) => props.color};

  .no {
    font-size: 16px;
  }
  .name {
    font-size: 24px;
    font-weight: 700;
  }

  .description {
    margin-top: 12px;
  }
`;

// 포켓몬 타입
const PokemonType = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  img {
    width: 24px;
  }
`;
