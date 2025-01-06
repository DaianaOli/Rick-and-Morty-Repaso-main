require('dotenv').config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { preCharge } = require("./src/controllers/controllerEpisode");
const PORT = process.env.PORT || 3000;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    await preCharge();
    console.log(`Server listening at ${PORT}`);
  });
});