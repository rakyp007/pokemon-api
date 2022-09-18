import { useEffect, useState } from "react";
import "./App.css"

function App() {

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

  const getAllPokemous =async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
  }

  useEffect(() => {
    getAllPokemous()
  }, [])


  return (
    <div className="App">
       <h1>Pokemon Evolution</h1>
       <div className="pokemon-container">
        <div className="all-container">

        </div>
        <button className="load-more">load more</button>
       </div>
    </div>
  );
}

export default App;
