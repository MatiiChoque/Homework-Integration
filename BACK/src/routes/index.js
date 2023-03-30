const {Router} = require('express');
const {getCharById} = require('../controllers/getCharById')
const {getCharDetail} = require('../controllers/getCharDetail')
const {postFavs,getFavs,deleteFavs} = require('../controllers/favs')

const router=Router()

router.get('/onsearch/:id',getCharById)

router.get('/detail/:id',getCharDetail)

router.post('/favs',postFavs)
router.get('/favs',getFavs)
router.delete('/favs/:id',deleteFavs)


module.exports = {
    router
}