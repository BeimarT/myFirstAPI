const express = require('express');
const app = express();
require('dotenv');

const myFirstController = require('./controllers/myFirstController');

//req = request
//res = response

app.get('/', myFirstController.helloWorld);              // Añadir la ruta de controllers y el nombre del nombre a exportar

app.use('/api/v1/user', require('./controllers/routes/userRoutes'));

app.listen(process.env.PORT || 3000, () =>{    // executar app por el puerto determinado
console.log('My First API running!')
});

//get obtenir
//post crear algo nuevo
//put actualizar
//delete eliminar
//api/v1/user/
//siempre mantener la version de api antigua durante un tiempo
