const axios = require("axios");

// const key = "c82202392a6c.f21bf49c7763dfa003a3";

// const getCharDetail = (res, id) => {
// axios(`https://rickandmortyapi.com/api/character/${id}`)
// .then((response) => {
//     const { image, name, gender, status, origin, species } = response.data
//     res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ image, name, gender, status, origin, species }));
// })
// .catch( (err) => {
//     res.writeHead(500, { "Contente-Type": "text/plain" });
//     res.end(`personaje ${id} no encontrado`)
//   })
// }

// module.exports = getCharDetail;

const URL = "https://rickandmortyapi.com/api/character/";

 function getCharDetail(req, res){
    const { id } = req.params;
    axios.get(URL + id)
    .then( (response) => {
        const { id, name, species, image, gender, origin, status } = response.data;
        res.status(200).json({ id, name, species, image, gender, origin: origin.name, status });
     }).catch((error) => {
        res.status(200).json({error: error.message});
     })
}


module.exports = getCharDetail;
