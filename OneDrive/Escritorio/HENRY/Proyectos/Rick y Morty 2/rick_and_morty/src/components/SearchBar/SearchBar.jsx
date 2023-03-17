import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
   
   const [character, setCharacter] = useState("");

   const handleChange = (event) => {
      const { value } = event.target;
      setCharacter(value);

   }

   return (
      <div>
         <input onChange={handleChange} className={style.Search} type='search' />
         <button onClick={() => props.onSearch(character)}>Agregar</button>
         <button>Random</button>
      </div>
   );
}
