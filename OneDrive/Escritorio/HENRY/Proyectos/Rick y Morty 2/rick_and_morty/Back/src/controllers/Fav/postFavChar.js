const favs = require("../../utils/favs")

const postFavChar = (req, res) => {
    favs.push(req.body);
    res.status(201).json(favs);
}

module.exports = postFavChar;