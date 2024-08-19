import PokemonCard from "./PokemonCard";
import DashboardTitle from "../assets/mypokemon.png";
import blankImg from "../assets/blankImg.png";
import "../styles/Dashboard.css";

const Dashboard = ({ myPokemon, removePokemon }) => {
  const blankDiv = () => {
    let arr = [];
    for (let i = 6; i > myPokemon.length; i--) {
      arr.push(
        <div className="blankImg">
          <img src={blankImg} alt="빈 이미지" />
        </div>
      );
    }
    return arr;
  };

  return (
    <div id="dashboard">
      <h2>
        <img src={DashboardTitle} alt="나만의 포켓몬" />
      </h2>
      <div className="myPokemon">
        {myPokemon.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.korean_name}
              pokemon={pokemon}
              clickEvent={removePokemon}
              isSelected={true}
            />
          );
        })}
        {blankDiv()}
      </div>
    </div>
  );
};
export default Dashboard;
