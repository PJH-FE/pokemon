import { useState } from "react";
import Router from "./shared/Router.jsx";

function App() {
  const defaultData =
    localStorage.getItem("myPokemon") !== null
      ? JSON.parse(localStorage.getItem("myPokemon"))
      : [];
  const [myPokemon, setMyPokemon] = useState(defaultData);
  return (
    <>
      <Router myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
    </>
  );
}

export default App;
