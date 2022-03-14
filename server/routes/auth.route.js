const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../schemas/Models/user.Model')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv'); 
dotenv.config()

const rounds = 10
const tokenSecret = process.env.SECRET

const middleware = require('../middleware/middleware')

// router.get('/', (req, res) => {
//     return res.json('Api is Live')
// })

router.post('/login', (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user) res.status(404).json({error: 'no user with that email found'})
        else {
            bcrypt.compare(req.body.password, user.password, (error, match) => {
                if (error) res.status(500).json(error)
                else if (match){
                    let token = generatedToken(user)
                    res.status(200).json({token: token, id:user._id, email: user.email, username: user.name });
                }
                else res.status(403).json({error: 'passwords do not match'})
            })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, rounds, (error, hash) => {
        if (error) res.status(500).json(error)
        else {
            const newUser =  User({name: req.body.username ,email: req.body.email, password: hash})
            newUser.save()
                .then(user => {
                    res.status(200).json({token: generatedToken(user)})
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        }
    })
});

const generatedToken = (user) => {
    return jwt.sign({ data: user}, tokenSecret, { expiresIn: '24h' })
}

router.get('/jwt-test', middleware.verify , (req, res) => {
    res.status(200).json(req.user)
})

module.exports = router