const  Joi = require('@hapi/joi');
const c = require('../constants/constants');

module.exports.validate = (schema, inputValidation) => {     //aquesta funció retorna middleware
    return (req, res, next) => {
        let objToValidate = {};
        if(inputValidation === 'body') {
            objToValidate = req.body;
        } else if (inputValidation === 'params') {
            objToValidate = req.params;
        } else if (inputValidation === 'query') {
            objToValidate = req.query;
        };
        // switch (inputValidation) {       Puedes hacerse con switch
        //     case 'body':
        //         objToValidate = req.body;
        //         break;
        //     case 'params':
        //         objToValidate = req.params;
        //         break;
        //     case 'query':
        //         objToValidate = req.query;
        //         break;
        //     default:
        //         objToValidate = {};
        //         break;
        // }
        const result = schema.validate(objToValidate);


        if (result.error) {
            const errorDetails = result.error.details.map((value) => value.message);
            const responseObj = {
            status: 400,
            body: errorDetails
            };
            return res.status(responseObj.status).send(responseObj);
        } else {
            next();
        }
    }
};