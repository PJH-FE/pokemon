// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import PokemonList from "../components/PokemonList";
import alertImg from "../assets/alertImg.png";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  const defaultData =
    localStorage.getItem("myPokemon") !== null
      ? JSON.parse(localStorage.getItem("myPokemon"))
      : [];
  const [myPokemon, setMyPokemon] = useState(defaultData);
  // 로컬 스토리지에 나만의 포켓몬 저장
  const saveData = (myPokemon) => {
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
  };

  // 추가 버튼 클릭 시
  const addPokemon = (pokemon) => {
    if (myPokemon.length === 6)
      return toast.error("포켓몬은 최대 6마리까지 등록 가능합니다.");

    if (!!myPokemon.find((item) => item.id === pokemon.id)) {
      toast.error("이미 선택된 포켓몬입니다.", { position: "top-center" });
    } else {
      setMyPokemon([...myPokemon, pokemon]);
      saveData([...myPokemon, pokemon]);
      toast.success(`${pokemon.korean_name} 포획에 성공하였습니다.`);
    }
  };

  // 삭제 버튼 클릭 시
  const removePokemon = (pokemon) => {
    Swal.fire({
      title: `${pokemon.korean_name}을(를) 놓아주시겠습니까?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "네",
      denyButtonText: `아니요`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: `${pokemon.korean_name}을(를) 놓아주었습니다.`,
          text: `${pokemon.korean_name}은(는) 꼬부기 여행사와 휴양을 떠났습니다.`,
          imageUrl: alertImg,
          imageHeight: 300,
        });
        const removedMyPokemonList = [...myPokemon].filter((item) => {
          return item.id !== pokemon.id;
        });
        setMyPokemon(removedMyPokemonList);
        saveData(removedMyPokemonList);
      }
    });
  };

  return (
    <BrowserRouter>
      <Layout myPokemon={myPokemon} removePokemon={removePokemon}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dex"
            element={<PokemonList addPokemon={addPokemon} />}
          />
          <Route
            path="/pokemon-detail"
            element={<PokemonDetail addPokemon={addPokemon} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
