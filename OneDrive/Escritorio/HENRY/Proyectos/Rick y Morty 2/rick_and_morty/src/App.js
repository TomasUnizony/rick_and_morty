import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"

function App () {

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const username = "tomastoon01@gmail.com"
  const password = "1234"
  const navigate = useNavigate();
  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }
 useEffect(() => {
  !access && navigate('/');
}, [access]);

  const location = useLocation();

  function onSearch(character) {
    const key = "c82202392a6c.f21bf49c7763dfa003a3";
   fetch(`https://be-a-rym.up.railway.app/api/character/${character}?key=${key}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}

function onClose(id){
setCharacters(characters.filter((character) => character.id !== id))
}

  return (
    <div className='App' style={{ padding: '25px' }}>
        {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
        <Route path='/' element={<Form login={login}/>}/>
        </Routes>
    </div>
  )
}

export default App
