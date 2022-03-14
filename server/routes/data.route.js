const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Data = require('../schemas/Models/data.Model')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv'); 
dotenv.config()

const rounds = 10

router.get('/', (req, res) => {
    User.findOne()
    .then(user => {
    })
    .catch(error => {
        res.status(500).json(error)
    })
});