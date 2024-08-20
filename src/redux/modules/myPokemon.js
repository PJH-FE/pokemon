import Swal from "sweetalert2";
import { toast } from "react-toastify";
import alertImg from "../../assets/alertImg.png";
import { createSlice } from "@reduxjs/toolkit";

const initialState =
  localStorage.getItem("myPokemon") !== null
    ? JSON.parse(localStorage.getItem("myPokemon"))
    : [];

// 로컬 스토리지에 나만의 포켓몬 저장
const saveData = (myPokemon) => {
  localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
};

const myPokemonSlice = createSlice({
  name: "myPokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      return action.payload.NewPokemonList;
    },

    delPokemon: (state, action) => {
      return action.payload.NewPokemonList;
    },
  },
});

export const HandleAddPokemon = (myPokemon, pokemon) => {
  return async (dispatch) => {
    if (myPokemon.length === 6) {
      toast.error("포켓몬은 최대 6마리까지 등록 가능합니다.");
    } else if (!!myPokemon.find((item) => item.id === pokemon.id)) {
      toast.error("이미 선택된 포켓몬입니다.");
    } else {
      const NewPokemonList = [...myPokemon, pokemon];
      saveData(NewPokemonList);
      toast.success(`${pokemon.korean_name} 포획에 성공하였습니다.`);
      return dispatch(addPokemon({ NewPokemonList }));
    }
  };
};

export const HandleDelPokemon = (myPokemon, pokemon) => {
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

      const NewPokemonList = myPokemon.filter((item) => item.id !== pokemon.id);

      saveData(NewPokemonList);
      dispatch(delPokemon({ NewPokemonList }));
    }
  };
};

export const { addPokemon, delPokemon } = myPokemonSlice.actions;
export default myPokemonSlice.reducer;
