
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

 function getCharById(req, res){
    const { id } = req.params;
    axios.get(URL + id)
    .then( (response) => {
        const { id, name, species, image, gender } = response.data;
        res.status(200).json({ id, name, species, image, gender });
     }).catch((error) => {
        res.status(200).json({error: error.message});
     })
}

module.exports = getCharById;