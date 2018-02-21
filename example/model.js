var Joi = require('joi');
var custom_fields = {
  name  : Joi.string().required(),
  email : Joi.string().email().required(),
  school : Joi.string().required(),
  gpa : Joi.number().required(),
};
module.exports = custom_fields;
