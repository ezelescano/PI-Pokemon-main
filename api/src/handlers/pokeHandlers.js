const {getAllPokes, getPokeById, pokeCreate, getPokeByName} = require('../controllers/pokesControllers')

const getAllPokesHandler = async (req, res) => {
    try {
        const result = await getAllPokes();
  res.status(200).json(result)
    } catch (error) {
     res.status(400).json({error: "No response from the server"})   
    }
}

const getPokeByIdHandler = (req, res) => {
    const result = getPokeById();
    res.send(result);
}

const pokeCreateHandler = (req, res) => {
    const result = pokeCreate();
    res.send(result);
}

module.exports = {
    getAllPokesHandler,
    getPokeByIdHandler,
    pokeCreateHandler
}