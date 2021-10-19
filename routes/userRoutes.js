//importar express 
//tiene función router que devuelve un objeto que nos dejara aplicar mas rutas sobre la aplicación
//mvc
//siempre exportar router porque en el indice hacemos require

const express = require('express');
const router = express.Router();

const userController = require('../userController');

router.get('list', userController.list);

module.exports = router;
