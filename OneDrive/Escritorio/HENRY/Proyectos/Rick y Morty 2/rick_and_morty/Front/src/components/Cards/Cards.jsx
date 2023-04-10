import Card from '../Card/Card';
import style from "./Cards.module.css"
import React from 'react';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={style.Cards}>
         {characters.map((character) => {
               return (
                  <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={() => props.onClose(character.id)}
                  />);
            })
         }
      </div>
   )
}
