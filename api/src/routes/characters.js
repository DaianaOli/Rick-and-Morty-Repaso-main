const { Router } = require('express');
const { getCharacters, createCharacter} =require("../controllers/controllerCharacter")
const router = Router();

router.get("/", getCharacters) 
router.post("/add", createCharacter) 





module.exports = router;