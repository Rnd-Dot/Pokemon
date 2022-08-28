import { TextField } from "@mui/material"
import React, { useState } from "react"
import Paginator from "../common/Paginator"
import Pokemon from "./Pokemon"
import "./PokemonList.scss"
import { NavLink } from "react-router-dom"

const PokemonList = ({ pokemons, loading, page, setPage, totalPages, onSearch }) => {
    const onLeftClick = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const onRightClick = () => {
        if (page !== totalPages) {
            setPage(page + 1)
        }
    }

    const [search, setSearch] = useState("")
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(undefined)
        }
    }


    const fiterPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })

    return <div className="wrapper">
        <div className="menu">
            <TextField id="standard-basic" variant="standard" label="Search" onChange={onChangeHandler} />
        </div>
        <Paginator page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick} />
        {loading ? (<div className="loading">Loading...</div>)
            : (<div className="pokemon-card">
                {pokemons && fiterPokemons.map((pokemon, index) => {
                    return <NavLink to={"/stat/"+ pokemon.id} className="link" pokemon={pokemon.id}>
                    <div className="pokemon">
                        <Pokemon key={index} pokemon={pokemon} />
                    </div>
                    </NavLink>
                })}
            </div>)
        }
    </div>
}

export default PokemonList