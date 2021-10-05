module.exports.arrayLista = (req, res) => {
    let responseObj ={};
    $array = ["Gerard", "Khadija","Alex","Roger","Xavier","Eric","Miquel","Alba","Raul","Marc","Jordi","Marc","Pol"];
    responseObj.alumnos = array;
    responseObj.contadorDeAlumnos = array.lenght;
    const responseStatus = 200;

    res.status(responseStatus).send(responseObj);
}