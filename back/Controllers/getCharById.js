const axios = require('axios');
const URL = 'https://rym2.up.railway.app/api/character/';
const API_KEY = 'henrystaff';

const getCharById = async (req, res) => {
    const id = req.params.id;

    try {
        //const response = await axios(`${URL}${id}&key=${API_KEY}`); API_KEY no sirve.
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        const data = response.data;

        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        };

        if (character.name) {
            res.send(character);
        } else {
            res.status(404).send(`ERROR 404 Not Found: ${res.status} - Character not found`);
        }
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
};

module.exports = getCharById;
