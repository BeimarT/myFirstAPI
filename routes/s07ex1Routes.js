const express = require('express');
const router = express.Router();

const controller = require('../controllers/s07ex1Controller');
const middleware = require('../middleware/s07ex1Middleware');

router.get('/object',         //put, get, post
middleware.checkString,
middleware.checkNumQueryParam,
// middleware.checkNumQueryInteger,
controller.movil);

module.exports = router;