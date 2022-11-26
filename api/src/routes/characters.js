const { Router } = require('express');
const { getCharacters, getCharactersById, createCharacter} =require("../controllers/controllerCharacter")
const router = Router();

router.get("/", getCharacters) 
router.get("/:id", getCharactersById ) 
router.post("/add", createCharacter) 





module.exports = router;