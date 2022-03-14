const express = require('express')
const router = express.Router()
const PieChart = require('../schemas/Models/PieChart.Model')
const User = require('../schemas/Models/user.Model')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv'); 

const jwt_decode = require('jwt-decode')
dotenv.config()

const rounds = 10

router.get('/', (req, res) => {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]
    const userdata = jwt_decode(token)
    User.findOne({email: userdata.data.email})
    .then(user => {
        if(!user) res.status(404).json({error: 'No User Found'});
        else {
            PieChart.findOne({email: userdata.data.email})
            .then(values => {
                if(!values) res.status(404).json({error: 'Not Data Found'});
                else {
                    res.status(200).json(values.data);
                }
            })
            .catch(error => {
                res.status(500).json(error)
            })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.post('/', (req, res) => {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]
    const userdata = jwt_decode(token)
    User.findOne({email: userdata.data.email})
    .then(user => {
        if(!user) res.status(404).json({error: 'User not Found'})
        else {
            const newData = PieChart({ email: userdata.data.email, data: req.body.data})
            newData.save()
            .then(val => {
                res.status(200).json(val);
            })
            .catch(error => {
                res.status(500).json(error)
            })
        
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

module.exports = router