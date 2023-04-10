const favs = require("../../utils/favs");

const getFavChar = (req, res) => {
    res.status(200).send(favs);
}

module.exports = getFavChar;