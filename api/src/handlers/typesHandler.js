const getTypePoke = require('../controllers/typesController');

const getTypeHandler = (req, res) => {
    const result = getTypePoke();
    res.send(result);
}


module.exports = getTypeHandler;