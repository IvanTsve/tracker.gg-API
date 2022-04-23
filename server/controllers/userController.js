const { Router } = require('express');
const router = Router();

const userModel = require('../modules/userModel');



router.get('/', async (req, res) => {
    const data = await userModel.getUserData();
    res.json(data)
})

router.post('/auth/register', async (req, res) => {
    const user = await userModel.registerUser(req, res);
})

router.post('/auth/login', async (req, res) => {
    const user = await userModel.loginUser(req, res);
})



module.exports = router;