import { useState } from "react";

// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import PokemonList from "../components/PokemonList";

// alert 커스텀
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import alertImg from "../assets/alertImg.png";

// context api
import { MyPokemonContext } from "../context/MyPokemonContext";

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
      <MyPokemonContext.Provider
        value={{ myPokemon, addPokemon, removePokemon }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<PokemonList />} />
            <Route path="/pokemon-detail" element={<PokemonDetail />} />
          </Routes>
        </Layout>
      </MyPokemonContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
