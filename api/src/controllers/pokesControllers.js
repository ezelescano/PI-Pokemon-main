const {Pokemon, Type} = require('../db');
const axios = require('axios');

const urlPokes = 'https://pokeapi.co/api/v2/pokemon/?limit=40';

const getAllPokes = async () => {
    const pokeDb = await Pokemon.findAll();
    const resData = (await axios.get(urlPokes)).data;
    console.log('////////////', resData);
     return [... pokeDb, ...resData];
}

const getPokeById = ( ) => {
    return ('Hola soy la ruta de get poke by id')
}

const pokeCreate = () => {
    return ('Hola soy la ruta del Poke Create')
}

module.exports= {
    getAllPokes,
    getPokeById, 
    pokeCreate
}