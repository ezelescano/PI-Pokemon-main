const {getAllPokes, getPokeById, pokeCreate, getPokeByName} = require('../controllers/pokesControllers')

const getAllPokesHandler = async (req, res) => {
    const {name} = req.query;
    if(name){
        try {
            const onePoke = await getPokeByName(name);
            res.status(200).json(onePoke);
        } catch (error) {
            res.status(400).json({error: "That name was not found"})
        } 
    }else {
        try {
        const result = await getAllPokes();
  res.status(200).json(result)
    } catch (error) {
     res.status(400).json({error: "No response from the server"})   
    }

    }
}

const getPokeByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
    const source = isNaN(id) ? 'Base de Datos' : 'Api';
    const result = await getPokeById(id, source);
    res.status(200).json(result);   
    } catch (error) {
        res.status(400).json({error: "Pokemon not found"})
    }
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