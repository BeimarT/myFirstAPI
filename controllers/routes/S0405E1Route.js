const express = require('express');
const router = express.Router();
const S0405E1 = require('../S0405E1');


const tiempo = require('../../controllers/routes/S0405E1Route');

router.get('/milisegundos', S0405E1.milisegundos);
router.get('/formatoNormal', S0405E1.formatoNormal);
router.get('/horas', S0405E1.horas);
module.exports = router;