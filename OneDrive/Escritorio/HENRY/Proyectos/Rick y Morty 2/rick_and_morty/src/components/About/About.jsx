import React from "react"
import style from "./About.module.css"

function About(){
    return(
        <div>
            <h1 className={style.h1}>Thanks for your support!</h1>
            <p className={style.p}>This page is a proyect that is in continuously development,
                updates will be made.
            </p>
        </div>
    )
}

export default About