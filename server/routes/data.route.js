const express = require('express')
const router = express.Router()
const User = require('../schemas/Models/user.Model')
const dotenv = require('dotenv'); 

const jwt_decode = require('jwt-decode')
dotenv.config()

router.get('/', (req, res) => {
    const auth = req.headers['authorization']
    if(auth){
        const token = auth.split(' ')[1]
        const userdata = jwt_decode(token)
        User.findOne({email: userdata.data.email})
        .then(user => {
            if(!user) res.status(404).json({error: 'No User Found'});
            else {
                res.status(200).json({ name: user.name, email: user.email, dob: user.dob, age: user.age, gender: user.gender, mobile: user.mobile });
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        res.status(404).json({ message: "authorization failed" })
    }
});

router.patch('/', (req, res) => {
    const auth = req.headers['authorization']
    if(auth){
        const token = auth.split(' ')[1]
        const userdata = jwt_decode(token)
        User.findOne({_id: userdata.data._id})
        .then(user => {
            if(!user) res.status(404).json({error: 'User not Found'})
            else {
                User.findByIdAndUpdate(userdata.data._id, req.body, {new: true}, (error, val) => {
                    if(error) {
                        res.status(404).json(error);
                    } else {
                        res.status(200).json(val);
                    }
                }
                )
                // User.findByIdAndUpdate({email: userdata.data.email}, req.body)
                // User.save()
                // .then(val => {
                //     res.status(200).json(val);
                // })
                // .catch(error => {
                //     res.status(500).json(error)
                // })
            
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        res.status(404).json({ message: "authorization failed" })
    }
});

module.exports = router