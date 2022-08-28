import PokemonList from "./comonents/Home/PokemonList"
import React, { useState, useEffect } from "react"
import { getPokemons, getPokemonData, searchPokemon } from "./api/api"
import "./App.scss"
import { ReactComponent as Logo } from "./assets/logo/pokemon.svg"
import { Route, Routes, Navigate, NavLink } from "react-router-dom"
import PokemonProfile from "./comonents/PokemonProfile/PokemonProfile"
import { Button } from "@mui/material"


function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const itemsPage = 42
  const getPokemon = async () => {
    setLoading(true)
    const data = await getPokemons(itemsPage, itemsPage * page)
    const promise = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url) 
    })
    const result = await Promise.all(promise)
    setPokemons(result)
    setLoading(false)
    setTotalPages(Math.ceil(data.count / itemsPage))
  }

  useEffect(() => {
    getPokemon()
  }, [page])


  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return getPokemon()
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    }
    else {
      setPokemons([result])
    }
    setLoading(false)
  }

  return <div className="wrapper">
    <div className="logo">
      <Logo />
      <NavLink  to="/home">
        <Button variant="text">Home</Button>
      </NavLink>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}/>
      <Route path="/home" element={< PokemonList 
            pokemons={pokemons}
            loading={loading}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            onSearch={onSearch} />}/>
      <Route  path="/stat" element={<PokemonProfile />}/>
      <Route  path="/stat/*" element={<PokemonProfile />}/>
    </Routes>
  </div>
}

export default App
