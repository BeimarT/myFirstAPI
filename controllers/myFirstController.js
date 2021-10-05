module.exports.helloWorld = (req, res) => {          // añadir module.exports.helloWorl para exportar req = peticion de usuario res = respuesta
    const responseObj = {msg: 'Hello World!'};
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}