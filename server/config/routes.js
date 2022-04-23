const { Router } = require('express');
const router = Router();

const homeController = require('../controllers/homeController');
const weaponsController = require('../controllers/weaponsController');
const userController = require('../controllers/userController');

router.use('/', homeController);
router.use('/weapons', weaponsController);
router.use('/user', userController)


module.exports = router;