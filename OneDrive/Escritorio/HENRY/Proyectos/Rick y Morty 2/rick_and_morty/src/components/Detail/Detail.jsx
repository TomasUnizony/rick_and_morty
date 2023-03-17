import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import style from "./Detail.module.css"

function Detail(){
    
    const { detailId } = useParams()

    const [character, setCharacter] = useState({});

    useEffect(() => {
        const key = "c82202392a6c.f21bf49c7763dfa003a3";
        axios(`https://be-a-rym.up.railway.app/api/character/${detailId}?key=${key}`).then((response) =>
        setCharacter(response.data)
        )
      }, []);

    return(
        <div className={style.container}>
        {character.name? (
            <>
            <h1 className={style.mainText}>{character.name}</h1>
            <h4 className={style.text}>{character.status}</h4>
            <h4 className={style.text}>{character.specie}</h4>
            <h4 className={style.text}>{character.gender}</h4>
            <h4 className={style.text}>{character.origin?.name}</h4>
            <img className={style.img} src={character.image} alt="img" />
        </>) : (
        <h3>Loading...</h3>)
    }
    </div>
    )
}

export default Detail