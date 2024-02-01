const express = require('express');
const server = express();
//const getCharById = require('./Controllers/getCharById');
//const login = require('./Controllers/login.js');
const morgan = require('morgan'); // 
const router = require('./Utils'); // se llama index
PORT = 4000

// Middlewares
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use(morgan('dev')); // modo dev

server.use('/rickandmorty', router);

//server.get('/rickandmorty/character/:id', getCharById);
//server.get('/rickandmorty/login', login);



server.listen(PORT, () => {
    console.log(`server listening on PORT: ${PORT}`)
});

