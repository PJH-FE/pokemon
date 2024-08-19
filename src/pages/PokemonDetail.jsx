import { Link, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import { TypeIcon } from "../setData/TypeIcon";
import "../styles/Detail.css";
import styled from "styled-components";
import { TypeColor } from "../setData/TypeColor";
import pokeball from "../assets/pokeball.png";

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
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    border-left: 3px solid ${(props) => props.color};
  }
`;

const PokemonDetail = ({ addPokemon }) => {
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
    <div id="detail">
      <Box color={TypeColor(pokemon.types[0])} className="box">
        <img src={pokemon.img_url} alt={pokemon.korean_name} />

        <div className="info">
          <span className="no">#{String(pokemon.id).padStart(3, "0")}</span>
          <div className="name">{pokemon.korean_name}</div>

          <div className="type">
            {pokemon.types.map((type) => {
              return (
                <span>
                  <img src={TypeIcon(type)} alt={type} key={type} />
                  {type}
                </span>
              );
            })}
          </div>

          <div className="description">{pokemon.description}</div>

          <button
            onClick={() => {
              addPokemon(pokemon);
            }}
            style={{
              borderColor: TypeColor(pokemon.types[0]),
              color: TypeColor(pokemon.types[0]),
            }}
          >
            <img src={pokeball} alt="몬스터볼" />
            포획하기
          </button>
        </div>
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
    </div>
  );
};
export default PokemonDetail;
