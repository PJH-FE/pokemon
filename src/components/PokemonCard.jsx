import { Link } from "react-router-dom";
import styled from "styled-components";
import { TypeColor } from "../setData/TypeColor";
import { TypeIcon } from "../setData/TypeIcon";
import pokeball from "../assets/pokeball.png";
import "../styles/Card.css";

const Card = styled.div`
  position: relative;
  border-radius: 8px;
  border: 3px solid ${(props) => props.color};
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.color};
    opacity: 0.3;
  }

  a {
    color: #000;
  }
  span.no {
    font-size: 12px;
  }
  div.name {
    margin-top: 6px;
    font-size: 16px;
    font-weight: 700;
    color: #1a1a1a;
  }
  .pokemon {
    transition: 0.3s;
  }
  &:hover .pokemon {
    transform: scale(1.2);
  }
  button {
    position: relative;
    z-index: 2;
    width: 80%;
    margin: 4px 0 6px;
    cursor: pointer;
  }
`;

const PokemonCard = ({ pokemon, clickEvent, isSelected }) => {
  const isLink = `/pokemon-detail?id=${pokemon.id}`;
  const buttonEvent = (e) => {
    e.preventDefault();
    clickEvent(pokemon);
  };

  return (
    <Card color={TypeColor(pokemon.types[0])}>
      <Link to={isLink} className="pokemonCard">
        <div className="type">
          {pokemon.types.map((type) => {
            return <img src={TypeIcon(type)} alt={type} key={type} />;
          })}
        </div>

        <img className="pokemon" src={pokemon.img_url} alt={pokemon.img_url} />
        <span className="no">#{String(pokemon.id).padStart(3, "0")}</span>
        <div className="name">{pokemon.korean_name}</div>
      </Link>

      {isSelected === false ? (
        <button onClick={buttonEvent} className="addBtn">
          <img src={pokeball} alt="추가" />
        </button>
      ) : (
        <button onClick={buttonEvent} className="removeBtn">
          놓아주기
        </button>
      )}
    </Card>
  );
};
export default PokemonCard;
