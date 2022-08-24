import React from "react"
import "./Pokemon.scss"


const Pokemon = ({ pokemon }) => {
    const style = `wrapper_card ${pokemon.types[0].type.name}`
    return <div className={style}>
        <img src={pokemon.sprites.front_default} alt="pokemon_photo" className="photo" />
        <div className="min_stat">
            <div className="name">{pokemon.name.toUpperCase()}</div>
            <div className="type">Type: {pokemon.types[0].type.name.toUpperCase()}</div>
        </div>
    </div>
}

export default Pokemon