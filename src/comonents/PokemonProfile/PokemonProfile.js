import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProfilePokemon } from "../../api/api"
import Skills from "./Skills"
import "./PokemonProfile.scss"


const PokemonProfile = () => {
    let params = useParams()
    let id = Object.values(params)

    const [pokemonData, setPokemonData] = useState({})
    const setData = async () => {
        const data = await getProfilePokemon(id)
        setPokemonData(data)
    }

    useEffect(() => {
        setData()
    }, [])


    return (
        <div className="skills">
            <div className="card_skills">
                <img src={pokemonData.sprites?.front_default} alt="pokemon_photo" style={{ width: "200px", height: "200px" }} />
                <div>
                    <div className="name">{pokemonData.name?.toUpperCase()}</div>
                    <Skills data={pokemonData} />
                </div>
            </div>
        </div>
    )
}

export default PokemonProfile