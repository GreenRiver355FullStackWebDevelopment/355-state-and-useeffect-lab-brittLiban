import { useState } from "react";
// import CardDetail from "./CardDetail";

//              the prop we give
const Cards = ({ pokes }) => {
    // use this to pass in the CardDetails
  const [character, setCharacter] = useState();


  const onCharacterClick = async poke => {
    // what URL to use? 
    const res = await fetch(poke.url);
    const data = await res.json();
    setCharacter(data);
  };

  return (
    <div className="cards">
    {/* BECAUSE OF THE .map were itterating through each one. Nice!  */}
      {pokes.map((poke, index) => (
        <div
          key={index}
          className="card"
          onClick={() => onCharacterClick(pokekey)}
        >
            {/* .Notation to get the name */}
          {poke.name}
          {/* {console.log(poke.name)} */}
        </div>
      ))}
      {character && <CardDetail character={character} />}
    </div>
  );
};
export default Cards;
