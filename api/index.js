const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {preCharge} = require ("./src/controllers/controllerEpisode")
const PORT = process.env.PORT;

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async() => {
    await preCharge()
    console.log(`Server listening at ${PORT}`); 
  });
});
