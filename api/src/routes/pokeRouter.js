const {Router} = require('express');
const {getAllPokesHandler, getPokeByIdHandler, pokeCreateHandler, getPokeByNameHandler} = require('../handlers/pokeHandlers')

const pokeRouter = Router();

pokeRouter.get('/', getAllPokesHandler);
pokeRouter.get('/:id', getPokeByIdHandler);
pokeRouter.post('/', pokeCreateHandler);

module.exports = pokeRouter;