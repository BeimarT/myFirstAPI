const express = require('express');
const router = express.Router();

const controller = require('../controllers/s06ex1Controller');
const middleware = require('../middleware/s06ex1Middleware');

router.get('/random',       //Si es per get, no cal posa :NOM VARIABLE, només cal escriure despres d'un interrogant
middleware.checkNumQueryParam,
middleware.checkNumQueryInteger,
middleware.checkGreater,
controller.random
);

module.exports = router;