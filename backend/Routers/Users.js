const express = require('express');
const router = express.Router();
const Users = require('../Models/Users.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const verify = require('./VerificationToken.js')

dotenv.config();


router.get('/', async (req, res) => {
    await Users.findAll().then((users) => res.json(users))
})

router.get('/:id', async (req, res) => {
    await Users.findByPk(req.params.id).then((users) => res.json(users))
})

router.post('/register', async (req, res) => {
   
    const emailExist = await Users.findOne({ where: {email: req.body.email}})
    if(emailExist) return res.status(400).send('Email already exist')
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password , salt)
    await Users.create({ 
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         password: hashPassword ,
         email: req.body.email,
         address: req.body.address,
         phoneNumber: req.body.phoneNumber,
         imgUrl: req.body.imgUrl,

        })
        .then((user) => res.json(user))
})
router.post('/login', async (req, res) => {
    
    const user = await Users.findOne({ where: {email: req.body.email}})
    if(!user) return res.status(400).send('Email is not found')
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(! validPass) return res.status(400).send('Invalid password ')
    const token = jwt.sign({id:user.id},process.env.SECRET_TOKEN)
    res.header('auth_token',token).send(token)
})

router.put('/:id', async (req, res) => {
    Users.findByPk(req.params.id).then((users) => {
        users.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            imgUrl: req.body.imgUrl,

        }).then((users) => {
            res.json(users);
        });
    });
})

router.delete('/:id',async (req, res) => {
    await Users.findByPk(req.params.id).then((users) => {
        users.destroy();
    }).then(() => {
        res.json("deleted");
    });
});

router.delete('/' ,async (req, res) => {
    await Users.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
});


module.exports = router;