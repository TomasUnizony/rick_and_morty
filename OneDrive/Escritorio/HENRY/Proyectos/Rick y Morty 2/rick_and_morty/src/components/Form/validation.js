const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = new RegExp("[0-9]");

function validation(userData){
    const errors = {};
    if(!regexEmail.test(userData.username)){
        errors.username = "Debe ser un mail";
    } else if(!userData.username){
        errors.username = "Username";
    } else if(userData.username.length > 35){
        errors.username = "El nombre de usuario no debe ser superior a 35 caracteres";
    } else if(!regexPassword.test(userData.password)){
        errors.password = "La contraseña tiene que tener al menos un numero";
    } else if(userData.password >= 6 && userData.password <= 10){
        errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
    }
    return errors;
}

export default validation;