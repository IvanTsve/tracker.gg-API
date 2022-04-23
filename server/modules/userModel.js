// 
const mongo = require('../mongo/mongo');
const collection = mongo.db("localDB").collection("users");

const config = require('../config/config');

const hashPassword = require('../helpers/hashing');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const fetch = require('node-fetch');
const { USER_URL } = require('../config/config');

async function getUserData() {
    const response = await fetch(USER_URL, {
        headers: {
            "content-type": "application/json",
            "TRN-Api-Key": "${API_KEY}"
        },
    });
    const body = await response.text();
    return (JSON.parse(body)).data;
}

async function registerUser(req, res) {
    if (req.body.email !== req.body.remail) {
        res.status(404).json('Emails do not match');
        return;
    }
    let user;
    user = await collection.findOne({ $or: [{ 'username': (req.body.uname).toLowerCase() }, { 'email': (req.body.email).toLowerCase() }] });
    if (user) {
        res.status(404).json('Username or email are taken');
        return
    }
    const hashedPass = await hashPassword(req.body.password);
    data = {
        username: req.body.uname.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: hashedPass,
    };
    user = collection.insertOne(data);
    res.status(201).json('User Created');

}

async function loginUser(req, res) {
    let user;
    user = await collection.findOne({ "email": req.body.email });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
        // let uid = jwt.sign({ 'uid': user._id, 'un': user.username }, config.secret, { expiresIn: '1h' });
        // res.cookie("uid", uid)
        res.status(200).json(user);
    } else {
        res.status(404).json('Wrong email/password');

    }
}




module.exports = {
    getUserData,
    registerUser,
    loginUser
}
