require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')

const {
  POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DATABASE,
} = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
      database: POSTGRES_DATABASE,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      host: POSTGRES_HOST,
      dialect: "postgres",
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}`,
        { 
          logging: false, 
          native: false,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }
      );
const basename = path.basename(__filename)

const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

modelDefiners.forEach((model) => model(sequelize))

let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
])
sequelize.models = Object.fromEntries(capsEntries)

const { Character, Episode } = sequelize.models

Character.belongsToMany(Episode, { through: 'CharacterEpisodes' })
Episode.belongsToMany(Character, { through: 'CharacterEpisodes' })

module.exports = {
  ...sequelize.models,
  conn: sequelize,
}