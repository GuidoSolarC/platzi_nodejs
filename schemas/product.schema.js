const Joi = require('joi')

// Definimos primera regla, primero tipo de campo y luego la validacion, ej: Joi.[TipoCampo].[Validacion]
const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10)

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required()
})

const updateProductSchema = Joi.object({
    name: name,
    price: price
})

const getProductSchema = Joi.object({
    id: id.required()
})


module.exports = { createProductSchema, updateProductSchema, getProductSchema }