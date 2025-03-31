require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL no está definida en las variables de entorno.");
}

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necesario para Vercel Postgres
    },
  },
  logging: false, 
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Leer y definir modelos
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => modelDefiners.push(require(path.join(__dirname, '/models', file))));

modelDefiners.forEach(model => model(sequelize));

const { Character, Episode } = sequelize.models;

// Definir relaciones
Character.belongsToMany(Episode, { through: 'CharacterEpisodes' });
Episode.belongsToMany(Character, { through: 'CharacterEpisodes' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
