const getTypePoke= require('../controllers/typesController');

const getTypeHandler = async (req, res) => {
    const result = await getTypePoke();
    res.send(result);
}


module.exports = getTypeHandler;