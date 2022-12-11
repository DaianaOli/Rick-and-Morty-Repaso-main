const axios = require("axios");
const {Character, Episode, } = require("../db.js")
const { Op } = require("sequelize");
const URL = "https://rickandmortyapi.com/api/character/";


async function getCharacters(req, res, next){
    try {
        let {
            name,
            order,
            page
        } = req.query

        let apiCharacters
        let dbCharacters
        let allChars=[]
        page = page || 1
        charXPage = 4
        

        if(name && name !== ""){
            apiCharacters = (await axios.get(`${URL}?name=${name}`)).data.results
            dbCharacters= await Character.findAll({
                where:{
                    name:{
                        [Op.iLike]: `%${name}%`  
                    }
                }
            })
            allChars= dbCharacters.concat(apiCharacters)
        }
        else{
            apiCharacters = (await axios.get(`${URL}`)).data.results
            dbCharacters= await Character.findAll({include: Episode})
            allChars= dbCharacters.concat(apiCharacters)
        }
            let result = allChars
            return res.send({
            result: result, 
            count: allChars.length,
        })
    } catch (error) {
        console.log("no va",error)
        return res.sendStatus(500)
    }
}

function createCharacter(req, res, next){
    try {
        let {image, name, species,origin, status, epId} = req.body
        // console.log(req.body)
        let newCharacter ={            
            image,
            name,
            species,
            origin,
            status
        }
        Character.create(newCharacter)
        .then((character)=>{
            character.addEpisodes(epId)
            return res.send(character)
        }
        )
    } catch (error) {
        console.log("no va",error)
    }

}



module.exports={
    getCharacters,
    createCharacter,

}