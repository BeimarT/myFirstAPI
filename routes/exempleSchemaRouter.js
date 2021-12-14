const express = require('express');
const router = express.Router();

const userController = require('../controllers/exempleSchema');
const joiMiddleware = require('../middleware/joiMiddleware');
const userSchemas = require ('../models/joi/userSchema');

router.get('/list', userController.list);
router.get('/profile/:userId', userController.profile);
router.post('/create',
        joiMiddleware.validate(userSchemas.createUserSchema, 'body'),
        userController.create);
module.exports = router;
