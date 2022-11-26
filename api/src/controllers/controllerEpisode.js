const {Episode} = require("../db.js")
const axios = require("axios");


async function preCharge(){
    try {
        let episodes = (await axios.get("https://rickandmortyapi.com/api/episode")).data.results
        episodes = episodes.map(e=>{
            return {id: e.id, name: e.name}
        })

        episodes=  await Promise.all(episodes.map(e=> Episode.findOrCreate({where: e})))
        console.log("Episodios cargados exitosamente")
        return "Episodios cargados exitosamente"

    } catch (error) {
        console.log(error)
    }
}

async function getEpisodes(req, res, next){    
    try {
        let episodes = await Episode.findAll()
        res.json(episodes)
    } catch (error) {
        next(error)
    }
}



module.exports={
    preCharge,
    getEpisodes
}