import { Link, useLocation, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PokemonDetail = () => {
  // 목록에서 넘겨받은 나만의 포켓몬
  const location = useLocation();
  const [newMyPokemon, setNewMyPokemon] = useState(location.state.myPokemon);
  const myPokemon = newMyPokemon;

  // 나만의 포켓몬에 추가
  const addMyPokemon = (pokemon) => {
    if (myPokemon.length === 6)
      return toast.error("포켓몬은 최대 6마리까지 등록 가능합니다.");

    !!myPokemon.find((item) => item.id === pokemon.id)
      ? toast.error("이미 선택된 포켓몬입니다.", { position: "top-center" })
      : setNewMyPokemon([...myPokemon, pokemon]);
  };

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
      <ToastContainer />
      <Dashboard myPokemon={newMyPokemon} />
      <Link to={prevLink} state={{ myPokemon }}>
        prev
      </Link>
      <img src={pokemon.img_url} alt="" />
      <Link to={nextLink} state={{ myPokemon }}>
        next
      </Link>
      <button
        onClick={() => {
          addMyPokemon(pokemon);
        }}
      >
        추가
      </button>

      <Link to="/dex" state={{ myPokemon }}>
        목록으로 돌아가기
      </Link>
    </div>
  );
};
export default PokemonDetail;
