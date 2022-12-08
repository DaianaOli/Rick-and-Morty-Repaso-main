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
        const charXPage = 20;

        if(name && name !== ""){
            apiCharacters = (await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)).data.results
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
            
            apiCharacters = (await axios.get("https://rickandmortyapi.com/api/character")).data.results
            dbCharacters= await Character.findAll({include: Episode})

            allChars= dbCharacters.concat(apiCharacters)
        }
        
            let result = allChars.slice((charXPage * (page -  1)) , (charXPage * (page -  1)) + charXPage ) 
            
        return res.send({
            result: result, 
            count: allChars.length,
        })
      

    } catch (error) {
        next(error)
    }
}

async function getCharactersById(req, res, next){
    try {
        let {id} = req.params
        if(id<2000){
        let apiCharacter= (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data
        var character={
            id: apiCharacter.id,
            name: apiCharacter.name,
            species: apiCharacter.species,
            origin: apiCharacter.origin.name,
            image: apiCharacter.image
        }
    }else{
        var character= await Character.findByPk(id)
    }   
    res.json(character)

    } catch (error) {
        next(error)
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
    getCharactersById,
    createCharacter,

}