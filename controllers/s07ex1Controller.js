const c = require('../constants.js/constants');

const arr = [{
        modelo: " ",
        precio: " ",
        pulgadas: " ",
        ram: " ",
        cpu: " ",
    }
];
module.exports.movil = {
    añadir: (req, res) => {
    res.status(c.ok).send({arr: req.body.string});
    },
    mostrar: (req,res) => {

    },

    modificar: (req,res) => {

    },
    eliminar: (req,res) => {

    },

};