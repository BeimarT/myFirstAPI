const express = require('express');
const router = express.Router();

const controller = require('../controllers/s06ex2Controller');
const middleware = require('../middleware/s06ex2Middleware');

router.get('/caja',         //put, get, post
middleware.checkString,
middleware.checkNumQueryParam,
// middleware.checkNumQueryInteger,
controller.caja);

module.exports = router;