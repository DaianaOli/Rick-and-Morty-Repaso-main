const { Router } = require('express');
const character = require('./characters');
const episode= require("./episodes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/characters", character)
router.use("/episode", episode)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
module.exports = router;
