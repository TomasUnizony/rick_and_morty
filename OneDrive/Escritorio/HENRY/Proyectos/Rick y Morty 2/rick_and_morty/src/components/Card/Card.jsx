import style from "./Card.module.css"
import { Link } from "react-router-dom";
import React from "react";

export default function Card(props) {
   return (
      <div className={style.Card}>
         <button onClick={props.onClose} className={style.close}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={style.Text}>{props.name}</h2>
         </Link>
         <h2 className={style.Text}>{props.species}</h2>
         <h2 className={style.Text}>{props.gender}</h2>
         <img  className={style.img} src={props.image} alt="" />
      </div>
   );
}
