const express = require('express');
const app = express();
require('dotenv');

const arrayLista = require('./controllers/arrayLista');

//req = request
//res = response

app.get('/', myFirstController.arrayLista);              // Añadir la ruta de controllers y el nombre del nombre a exportar

app.listen(process.env.PORT || 3000, () =>{    // executar app por el puerto determinado
console.log('My First API running!')
});