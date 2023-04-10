const favs = require("../../utils/favs");

const deleteFavChar = (req, res) => {
    const { id } = req.params;
    favs = favs.filter((character) => character.id !== Number(id));
    res.status(200).json(favs);
}

module.exports = deleteFavChar;