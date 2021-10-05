module.exports.helloWorld = (req, res) => {          // añadir module.exports.helloWorl para exportar req = peticion de usuario res = respuesta
   // const responseObj = {msg: 'Hello World!'};
   //const responseStatus = 200;
    let responseObj ={};
    const array = ["Gerard", "Khadija","Alex","Roger","Xavier","Eric","Miquel","Alba","Raul","Marc","Jordi","Marc","Pol"];
    responseObj.alumnos = array;
    responseObj.contadorDeAlumnos = array.length;
    const responseStatus = 200;

    res.status(responseStatus).send(responseObj);
};