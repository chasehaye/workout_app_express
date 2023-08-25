var express = require('express');
var router = express.Router();
const routinesController = require('../controllers/routines')

/* GET users listing. */
router.get('/', routinesController.index)

module.exports = router;
