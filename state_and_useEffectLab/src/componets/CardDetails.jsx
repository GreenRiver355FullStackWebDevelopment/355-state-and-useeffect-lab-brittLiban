const CardDetail = ({ pokemonURL }) => {
    return (
      <div className="card-detail">
        {console.log(pokemonURL)}
        <h1>The pokemon is {pokemonURL.forms[0].name}</h1>
        <ul> Fun Facts</ul>
        <li>Abilities - {pokemonURL.abilities[0].ability.name} && {pokemonURL.abilities[1].ability.name}</li>
        <li>Base xp of - {pokemonURL.base_experience}</li>
        <li>And a move is - {pokemonURL.moves[0].move.name}</li>
        {/* <p>Height: {pokemonURL.height} cm</p>
        <p>Mass: {pokemonURL.mass} kg</p>
        <p>Hair Color: {pokemonURL.hair_color}</p>
        <p>Skin Color: {pokemonURL.skin_color}</p>
        <p>Eye Color: {pokemonURL.eye_color}</p>
        <p>Birth Year: {pokemonURL.birth_year}</p>
        <p>Gender: {pokemonURL.gender}</p> */}
      </div>
    );
  };
  export default CardDetail;
  