var Joi = require('joi');
var custom_fields = {
    name  : Joi.string().required(),
    histroy : Joi.string().required(),
    language : Joi.number().required(),
    plan : Joi.string().required(),
    deposit : Joi.number().required(),
    asset : Joi.number().required(),
    validation : Joi.string().required(),
    email : Joi.string().email().required(),
};
module.exports = custom_fields;
