const { Pokemon, Type } = require('../db');
const axios = require('axios');

const urlPokes = 'https://pokeapi.co/api/v2/pokemon/?limit=40';

/*********************************GET ALL POKEMON'S**************************************************** */
const getAllApiPokes = async () => {
    const apiReq = (await axios.get(urlPokes)).data;
    const apiPokes = Promise.all(
        apiReq.results.map(async (pokemon) => {
            let subReqApi = (await axios.get(pokemon.url)).data;
            let pokeRequest = {
                id: subReqApi.id,
                name: subReqApi.name,
                image: subReqApi.sprites.front_default,
                hp: subReqApi.stats[0].base_stat,
                attack: subReqApi.stats[1].base_stat,
                defense: subReqApi.stats[2].base_stat,
                speed: subReqApi.stats[5].base_stat,
                height: subReqApi.height,
                weigth: subReqApi.weight,
                types: subReqApi.types.map((type) => {
                    return { name: type.type.name };
                }),

            };
            return pokeRequest;
        })
    )
    return apiPokes;
}

const getAllPokes = async () => {
    const pokeDataBase = await Pokemon.findAll({
        includes: {
            model: Type,
            through: {
                attributes: [],
            },
            attributes: ["name"],
        }
    });
    const apiPokes = await getAllApiPokes();
    return [...apiPokes, ...pokeDataBase];
}


/*****************************GET POKEMON BY NAME************************************************* */

const getPokeByName = async (name) => {
    const toLowerName = name.toLowerCase();
    const allPokes = await getAllPokes();
    const result = allPokes.filter((pokemon) => pokemon.name === toLowerName);
}


/****************************GET POKEMON BY ID***************************************************** */

const getPokeById = async (id, source) => {
    if (source === 'Base de Datos') {
        const idDBase = await Pokemon.findByPk(id, {
            includes: {
                model: Type,
                attributes: ["name"],
            },
        });
        return idDBase;
    } else {
        const apiPokes = await getAllApiPokes();
        const pokesFilter = apiPokes.find((pokes) => pokes.id == id);
        return pokesFilter;
    }
}






/***************************POKEMON CREATE******************************************************* */

const pokeCreate = () => {


    return ('Hola soy la ruta del Poke Create')



}

module.exports = {
    getAllPokes,
    getPokeById,
    pokeCreate,
    getPokeByName
}