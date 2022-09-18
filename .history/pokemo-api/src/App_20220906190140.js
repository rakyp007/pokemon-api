import { useEffect, useState } from "react";
import "./App.css"

function App() {

  const [allPokemon, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

  const getAllPokemous =async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonOdject (result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
        
        await console.log(allPokemon);
      })
    }
    createPokemonOdject(data.results)
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
