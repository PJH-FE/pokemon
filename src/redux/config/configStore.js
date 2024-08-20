import { configureStore } from "@reduxjs/toolkit";
import myPokemon from "../modules/mypokemon";

// rootReducer를 따로 정의할 필요 없이 configureStore에 바로 reducers 객체로 전달할 수 있습니다.
const store = configureStore({
  reducer: {
    myPokemon,
  },
});

export default store;
