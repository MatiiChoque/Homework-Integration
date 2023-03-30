const express = require('express');
const server = express();
const morgan = require('morgan')
const {router} = require('../src/routes/index')
const cors = require('cors')
const PORT = 3001;

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.use('/rickandmorty',router)





server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})