const {Type} = require('../db');
const axios = require('axios');

const getTypePoke = async () => {
    const typeDB = await Type.findAll();
    if(typeDB.length > 0){
        return typeDB;
    }else {
        const typesApi = (await axios.get("https://pokeapi.co/api/v2/type")).data;
        
        const apiTypes =  Promise.all(
    typesApi.results.map(async (t, index) => {
        let types = await Type.create({
          id: index + 1,
          name: t.name,
        });
        return types;
      })
    );
    return apiTypes;
  }

}

module.exports = getTypePoke;