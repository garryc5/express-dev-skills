var express = require('express');
var router = express.Router();
var skillroute = require('../controllers/skills')
/* GET users listing. */
router.get('/',skillroute.index);
router.get('/:id',skillroute.show);

module.exports = router;
