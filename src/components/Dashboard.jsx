import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import DashboardTitle from "../assets/mypokemon.png";
import blankImg from "../assets/blankImg.png";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const myPokemon = useSelector((state) => state.myPokemon);

  // 나만의 포켓몬 Default 이미지 출력
  const blankDiv = () => {
    let arr = [];
    for (let i = 6; i > myPokemon.length; i--) {
      arr.push(
        <BlankImg key={"blankImg" + i}>
          <img src={blankImg} alt="빈 이미지" />
        </BlankImg>
      );
    }
    return arr;
  };

  return (
    <DashboardBox>
      <h2>
        <img src={DashboardTitle} alt="나만의 포켓몬" />
      </h2>
      <MyPokemonList>
        {myPokemon.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.korean_name}
              pokemon={pokemon}
              isSelected={true}
            />
          );
        })}
        {blankDiv()}
      </MyPokemonList>
    </DashboardBox>
  );
};
export default Dashboard;

const DashboardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;

  h2 {
    margin-bottom: 16px;
    img {
      height: 82px;
    }
  }
`;

const MyPokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;

  > div {
    max-width: 120px;
    width: calc((100% / 6) - (40px / 6));
    box-sizing: border-box;
    background-color: #fff;

    @media (max-width: 1080px) {
      & {
        width: calc((100% / 3) - (16px / 3));
      }
    }
  }
`;

const BlankImg = styled.div`
  position: relative;
  border: 2px solid #000;
  border-radius: 14px;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding: 50% 0;
  }

  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
`;
