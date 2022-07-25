const boom = require('@hapi/boom')

// Middleware para validacion de datos, tiene que ser dinamico, por lo que recibira schema y property
// Revisar "Closures en JS"
function validatorHandler (schema, property) {
    return (req, res, next) => {
        const data = req[property]
        const { error } = schema.validate(data, { abortEarly: false }) // "abortEarly", es para poder enviar todos los errores de una vez y no 1 x 1 
        if(error){
            next(boom.badRequest(error))
        }
        next()
    }
  }

  module.exports = validatorHandler