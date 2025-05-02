import { useState } from "react";
import CardDetail from "./CardDetails";

//              the prop we give - pokes.results
// this returns either the name as one field and a url accescing more data in the next
const Cards = ({ pokes }) => {
  // use this to pass in the CardDetails - its a large url for pokemon url data
  const [pokemonURL, setPokemon] = useState();


  const onCharacterClick = async poke => {
    // what URL to use? 
    console.log(`This is the url that is being pursued ${poke.url}`)
    const res = await fetch(poke.url);
    const data = await res.json();
    console.log(data);
    setPokemon(data);
  };

  return (
    <div className="cards">
      {/* BECAUSE OF THE .map were itterating through each one. Nice!  */}
      {pokes.map((poke, index) => (
        <div
          key={index}
          className="card"
          onClick={() => onCharacterClick(poke)}
        >
          {/* .Notation to get the name */}
          {poke.name}
          {/* {console.log(poke.url)} */}
        </div>
      ))}
      {pokemonURL && <CardDetail pokemonURL={pokemonURL} />}
    </div>
  );
};
export default Cards;
