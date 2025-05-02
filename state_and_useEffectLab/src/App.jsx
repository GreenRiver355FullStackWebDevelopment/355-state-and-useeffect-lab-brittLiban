import { useEffect, useState } from 'react'
import Cards from "./componets/Cards"
import './App.css'

function App() {
  //the current grabber and setter of my state to capture ALL the pokemon 
  const [offSet, setOffset] = useState(0);
  const [pokes, setPoke] = useState([]);

  useEffect(() => {
    fetchPoke();
  }, [offSet]);


  const fetchPoke = async () => {
    //making the fetch call 
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offSet}`
    );

    const data = await res.json();
    //data.results[0].name to get the name
    //console.log(data);
    setPoke(data.results);
  }



  const onClickNext = () => {
    if ( offSet < 500) {
      setPage(prev => prev + 20);
    }
    else {
      setPage([20]);
    }
  };

  const onClickBack = () => {
    if ( offSet >= 20) {
      setPage(prev => prev - 20);
    }
    else {
      setPage(offSet = 20);
    }
  };



  return (
    <>

      <div className="App">
        <h1>Pokemon Characters</h1>
        <div className="main-container ">
          <div>
            <Cards pokes={pokes} />
            <div>
              <button onClick={onClickBack}>Back</button>
              <button onClick={onClickNext}>Next</button>
            </div>
          </div>
        </div>
      </div>
      

    </>


  )
}

export default App
