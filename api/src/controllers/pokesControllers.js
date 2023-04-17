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
                created: false,

            };
            return pokeRequest;
        })
    )
    return apiPokes;
}

const getAllPokes = async () => {
    const pokeDataBase = await Pokemon?.findAll({
        include: {
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
    if (result.length === 0) {
        return "The Pokémon Does Not Exist";
    }
    return result;
}


/****************************GET POKEMON BY ID***************************************************** */

const getPokeById = async (id, source) => {
    if (source === 'Base de Datos') {
        const idDBase = await Pokemon.findByPk(id, {
            include: [{
                model: Type,
                attributes: ["name"],
            }]
        });
        console.log("//////", idDBase.dataValues);
        return idDBase;
    } else {
        const apiPokes = await getAllApiPokes();
        const pokesFilter = apiPokes.find((pokes) => pokes.id == id);
        return pokesFilter;
    }
}






/***************************POKEMON CREATE******************************************************* */


const pokeCreate = async (name, image, hp, attack, defense, speed, height, weight, type1, type2) => {
    console.log("/////soy el input del controller", name, image, hp, attack, defense, speed, height, weight, type1, type2 );
    name = name.toLowerCase();
    try {
        let createdPokemon = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
        });
       const findtype1 = await Type.findOne({where: {name: type1}})
       const findtype2 = await Type.findOne({where: {name: type2}})
       
        await createdPokemon.addType(findtype1);
        await createdPokemon.addType(findtype2);
        return res.status(200).send("The pokemon has been created successfully");
    } catch (error) {
        return error;
    }
}


module.exports = {
    getAllPokes,
    getPokeById,
    pokeCreate,
    getPokeByName
}