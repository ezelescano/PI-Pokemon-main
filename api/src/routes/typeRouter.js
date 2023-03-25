const {Router} = require('express');

const typeRouter = Router();

typeRouter.get('/', getTypeHandler);

module.exports = typeRouter;