const status = {
    ok: 200,
    notFound: 404,
}

let date = new Date();
const fecha1 = date.getTime();
const fecha2 = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
const fecha3 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

module.exports = {
    milisegundos: (req,res) => {
        console.log(req.body);
        res.status(status.ok).send({Milisegundos: fecha1});
    },
    formatoNormal: (req, res) => {
        console.log(req.body);
        res.status(status.ok).send({FechaActual: fecha2});
    },

    horas: (req,res) => {
        console.log(req.body);
        res.status(status.ok).send({Horas: fecha3});
    }
}