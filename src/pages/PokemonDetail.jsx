import { Link, useLocation, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const location = useLocation();
  const key = location.state.key;
  console.log(key);

  const [searchParams, setSearchParams] = useSearchParams();
  const nowPokemonId = Number(searchParams.get("id"));

  const pokemon = MOCK_DATA.find((item) => item.id === nowPokemonId);

  const nextBtn = () => {
    nowPokemonId === MOCK_DATA.length
      ? setSearchParams(`id=1`)
      : setSearchParams(`id=${nowPokemonId + 1}`);
  };
  const prevBtn = () => {
    nowPokemonId === 1
      ? setSearchParams(`id=${MOCK_DATA.length}`)
      : setSearchParams(`id=${nowPokemonId - 1}`);
  };

  return (
    <div>
      <button onClick={prevBtn}>prev</button>
      <img src={pokemon.img_url} alt="" />
      <button onClick={nextBtn}>next</button>

      <Link to="/dex">목록으로 돌아가기</Link>
    </div>
  );
};
export default PokemonDetail;
