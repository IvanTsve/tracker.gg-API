const { Router } = require('express');
const router = Router();
const weaponsModel = require('../modules/weaponsModel');


router.get('/', async (req, res)=> {
  const data = await weaponsModel.getAll();
  res.json(data);
})

module.exports = router;