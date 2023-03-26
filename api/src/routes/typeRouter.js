const {Router} = require('express');
const getTypeHandler = require('../handlers/typesHandler');




const typeRouter = Router();

typeRouter.get('/', getTypeHandler);

module.exports = typeRouter;