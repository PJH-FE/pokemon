import { useDispatch, useSelector } from "react-redux";
import { HandleAddPokemon, HandleDelPokemon } from "../redux/modules/myPokemon";
import styled from "styled-components";
import { TypeColor } from "../setData/TypeColor";
import pokeball from "../assets/pokeball.png";

const Button = ({ pokemon, btnType }) => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.myPokemon);

  const btnEvent = (e) => {
    e.preventDefault();
    btnType === "listDel"
      ? dispatch(HandleDelPokemon(myPokemon, pokemon))
      : dispatch(HandleAddPokemon(myPokemon, pokemon));
  };

  const BtnStyle = (btnType) => {
    switch (btnType) {
      case "listAdd":
        return (
          <AddBtn
            onClick={(e) => {
              btnEvent(e);
            }}
          >
            <img src={pokeball} alt="추가" />
          </AddBtn>
        );
      case "listDel":
        return (
          <RemoveBtn
            onClick={(e) => {
              btnEvent(e);
            }}
          >
            놓아주기
          </RemoveBtn>
        );
      default:
        return (
          <DetailBtn
            color={TypeColor(pokemon.types[0])}
            onClick={(e) => {
              btnEvent(e);
            }}
          >
            <img src={pokeball} alt="몬스터볼" />
            포획하기
          </DetailBtn>
        );
    }
  };

  return <>{BtnStyle(btnType)}</>;
};
export default Button;

// 추가 버튼
const AddBtn = styled.button`
  background: none;
  border: 0;
  outline: none !important;
  cursor: pointer;

  img {
    width: 24px;
  }
  &:hover img {
    animation: pokeball 1.5s infinite;
  }

  // 추가 버튼 애니메이션
  @keyframes pokeball {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(-22deg);
    }
    45% {
      transform: rotate(22deg);
    }
    60% {
      transform: rotate(0deg);
    }
  }
`;

// 삭제버튼
const RemoveBtn = styled.button`
  color: #fff;
  font-weight: 700;
  background-color: #9a9a9a;
  border-radius: 4px;
  border: 0;
  padding: 4px 0;
  margin: 8px 0 10px !important;
  transition: 0.3s;

  &:hover {
    background-color: #ef4036;
  }
`;

// 상세 버튼
const DetailBtn = styled.div`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: transparent;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 4px;
  outline: none !important;
  padding: 2px 0;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;

  img {
    width: 24px;
  }
`;
