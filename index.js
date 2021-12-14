const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connect = require('./database/connect');

connect.createConnection();

// const myFirstController = require('./controllers/myFirstController');

//req = request
//res = response
app.use(cors());
app.use(express.json());    //parseja body de json (ajax)
app.use(express.urlencoded({extended: true}));      //parseja bodies de form


// app.get('/', myFirstController.helloWorld);              // Añadir la ruta de controllers y el nombre del nombre a exportar

app.use('/api/v1/user', require('./controllers/routes/userRoutes'));
app.use('/api/v1/time', require('./controllers/routes/S0405E1Route'));
app.use('/api/v1/s05ex3', require('./routes/s05ex3Routes'));
app.use('/api/v1/s06ex1', require('./routes/s06ex1Routes'));
app.use('/api/v1/s06ex2', require('./routes/s06ex2Routes'));
// app.use('/api/v1/s07ex1', require('./routes/s07ex1Routes'));
// app.use('/api/v1/joi', require ('./routes/exempleSchemaRouter'));


app.listen(process.env.PORT || 3000, () =>{    // executar app por el puerto determinado    //Sempre es podra executar desde aquest port

console.log(`My First API running on port: ${process.env.POrt}`)
});

//get obtenir
//post crear algo nuevo
//put actualizar
//delete eliminar
//api/v1/user/
//siempre mantener la version de api antigua durante un tiempo