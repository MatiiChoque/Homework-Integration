const axios = require("axios");
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharDetail = (req,res) => {
    const {id} = req.params;

    axios
    .get(`${URL}${id}`)
    .then((response)=>{
        const character = {
            id:response.data.id,
            name:response.data.name,
            image:response.data.image,
            gender:response.data.gender,
            species:response.data.species,
            origin:response.data.origin?.name
        }
        res.status(200).json(character)
    })
    .catch((error)=>{
        res.status(500).json({error:error.message})
    })

}

module.exports = {
    getCharDetail
}