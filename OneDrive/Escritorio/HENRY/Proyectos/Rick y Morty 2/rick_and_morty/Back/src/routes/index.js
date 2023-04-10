const { Router } = require("express");
const getCharDetail = require("../controllers/getCharDetail");
const getCharById = require("../controllers/getCharById");
const postFavChar = require("../controllers/Fav/postFavChar");
const getFavChar = require("../controllers/Fav/getFavChar");
const deleteFavChar = require("../controllers/Fav/deleteFavChar");

const router = Router();

router.get("/onsearch/:id" , getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/favs", postFavChar);
router.get("/favs", getFavChar);
router.delete("/favs/:id", deleteFavChar);

module.exports = router;
