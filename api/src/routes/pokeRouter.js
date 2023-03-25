const {Router} = require('express');


const pokeRouter = Router();

pokeRouter.get('/', getAllPokesHandler);
pokeRouter.get('/:idPokemon', getPokeByIdHandler);
pokeRouter.post('/', pokeCreateHandler);

module.exports = pokeRouter;