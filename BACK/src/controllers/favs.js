const {favs} = require('../utils/favs')

const postFavs = (req,res) =>{
    favs.push(req.body)
    res.status(201).json(favs)
}
const getFavs = (req,res) => {
    res.status(201).json(favs)
}
const deleteFavs = (req,res) => {
    const {id} = req.params
    favs=favs.filter(char=>char.id !== Number(id))
    res.status(200).json(favs)
}

module.exports = {
    postFavs,
    getFavs,
    deleteFavs
}