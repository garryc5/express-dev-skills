var express = require('express');
var router = express.Router();
var skillroute = require('../controllers/skills')
/* GET users listing. */
router.get('/',skillroute.index);
router.post('/',skillroute.create);
router.post('/:id/edit',skillroute.edit);
router.get('/:id',skillroute.show);
router.delete('/:id',skillroute.delete);
router.post('/:id/edit',skillroute.edit);



module.exports = router;
