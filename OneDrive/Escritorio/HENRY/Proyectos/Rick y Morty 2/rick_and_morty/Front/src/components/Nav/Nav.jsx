import React from "react"
import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom"

function Nav(props){
    return(
        <div className={style.Nav}>
            <SearchBar onSearch={props.onSearch}/>
            <hr className={style.hr}/>
            <NavLink to="/about"><span className={style.NavText}>About</span></NavLink>
            <NavLink to="/home"><span className={style.NavText}>Home</span></NavLink>
        </div>
    )
}

export default Nav