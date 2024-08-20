// alert 커스텀
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import alertImg from "../../assets/alertImg.png";

const initialState =
  localStorage.getItem("myPokemon") !== null
    ? JSON.parse(localStorage.getItem("myPokemon"))
    : [];

// 로컬 스토리지에 나만의 포켓몬 저장
const saveData = (myPokemon) => {
  localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
};

const ADD_POKEMON = "ADD_POKEMON";
export const addPokemon = (myPokemon, pokemon) => {
  return async (dispatch) => {
    if (myPokemon.length === 6) {
      toast.error("포켓몬은 최대 6마리까지 등록 가능합니다.");
    } else if (!!myPokemon.find((item) => item.id === pokemon.id)) {
      toast.error("이미 선택된 포켓몬입니다.");
    } else {
      saveData([...myPokemon, pokemon]);
      toast.success(`${pokemon.korean_name} 포획에 성공하였습니다.`);

      dispatch({
        type: ADD_POKEMON,
        pokemon: [...myPokemon, pokemon],
      });
    }
  };
};

const DEL_POKEMON = "DEL_POKEMON";
export const delPokemon = (myPokemon, pokemon) => {
  return async (dispatch) => {
    const result = await Swal.fire({
      title: `${pokemon.korean_name}을(를) 놓아주시겠습니까?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "네",
      denyButtonText: `아니요`,
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: `${pokemon.korean_name}을(를) 놓아주었습니다.`,
        text: `${pokemon.korean_name}은(는) 꼬부기 여행사와 휴양을 떠났습니다.`,
        imageUrl: alertImg,
        imageHeight: 300,
      });

      const removedMyPokemonList = myPokemon.filter(
        (item) => item.id !== pokemon.id
      );
      saveData(removedMyPokemonList);

      dispatch({
        type: DEL_POKEMON,
        pokemon: removedMyPokemonList,
      });
    }
  };
};

const myPokemon = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMON":
      return (state = action.pokemon);

    case "DEL_POKEMON":
      return (state = action.pokemon);

    default:
      return state;
  }
};

export default myPokemon;
