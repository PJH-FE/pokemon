import { Link, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

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
    <div>
      <Link to={prevLink}>prev</Link>
      <img src={pokemon.img_url} alt="" />
      <Link to={nextLink}>next</Link>
      <button
        onClick={() => {
          addPokemon(pokemon);
        }}
      >
        추가
      </button>

      <Link to="/dex">목록으로 돌아가기</Link>
    </div>
  );
};
export default PokemonDetail;
