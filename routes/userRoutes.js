//importar express 
//tiene función router que devuelve un objeto que nos dejara aplicar mas rutas sobre la aplicación
//mvc
//siempre exportar router porque en el indice hacemos require

const express = require('express');
const router = express.Router();

const userController = require('../userController');

router.get('/listArray', userController.list);
router.get('/profile/:userId', userController.profile);
router.post('/create',
        joiMiddleware.validate(userSchemas.createUserSchema, 'body'),
        userController.create);

router.get('/details/:id',
        joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
        userController.selectById
);
router.get('/list',
        joiMiddleware.validate(userSchemas.selectAllSchema, 'query'),
        userController.selectAll
        );

module.exports = router;