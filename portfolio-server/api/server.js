const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const logger = require('../middleware/logger');

const server = express();
server.use(helmet());
server.use(cors());
server.use(logger('long'));
server.use(express.json());

server.get('/', (req, res, next) => {
    res.json({
        message: 'Stephen Tanksley\'s portfolio website api.'
    });
});

server.use((error, req, res, next) => {
    console.log('Error: ', error)
    res.status(500).json({
        message: "Something went wrong."
    });
});

module.exports = server;