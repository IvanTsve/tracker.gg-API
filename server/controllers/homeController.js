const { Router } = require('express');
const router = Router();


router.get('/', (req, res)=> {
    res.json('{name:John, age:30, car:null}');
})

module.exports = router;