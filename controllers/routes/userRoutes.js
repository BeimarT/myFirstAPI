//importar express 
//tiene función router que devuelve un objeto que nos dejara aplicar mas rutas sobre la aplicación
//mvc
//siempre exportar router porque en el indice hacemos require

const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController')

router.get('/list', userController.list);
router.get('/profile/:userId', userController.profile);

module.exports = router;
