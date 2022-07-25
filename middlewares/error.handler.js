const { restart } = require("nodemon")

// Capturar cualquier error y monitorear
function logErrors (err, req, res, next) {
  console.log('Log Errors')
  console.error(err)
  next(err)
}
// Este handler, responde sobre el error antes monitorizado
function errorHandler (err, req, res, next) {
  console.log('Error handler')
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

// Handler para errores de tipo "boom" (https://github.com/hapijs/boom)
function boomErrorHandler (err, req, res, next) {
  if(err.isBoom){
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  // Si no es de tipo boom, continuamos al siguiente middleware
  next(err)
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
