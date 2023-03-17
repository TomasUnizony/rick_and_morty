import React from "react";
import style from "./Form.module.css"
import { useState } from "react";
import validation from "./validation";

function Form (props){

    const [userData, setUserData] = useState({ 
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username:"",
        password:""
    })
 
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        setErrors(
            validation({
                ...userData,
                [name]: value,
            }));
    }

    function handlesubmit(event){
        event.preventDefault();
        props.login(userData);
    }

    return (
  <div className={style.form}>
    <form onSubmit={handlesubmit}>
        <label className={style.text} htmlFor="Username">Username</label>
        <input 
        onChange={handleInputChange} 
        value={userData.username}
        name="username"
        className={errors.username && style.blockError}
        type="text" />
        <p className={style.textError}>{errors.username && errors.username}</p>
        <label className={style.text} htmlFor="Password">Password</label>
        <input 
        value={userData.password}
        className={errors.password && style.blockError}
        name="password" 
        onChange={handleInputChange} 
        type="text" />
        <p className={style.textError}>{errors.password || errors.password}</p>
        <button className={style.button}>Login</button>
    </form>
  </div>
    )
}

export default Form