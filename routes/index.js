// Creacion de path global
const express = require('express')

const productsRouter = require('./productsRouter')
const categoriesRouter = require('./categoriesRouter')
const usersRouter = require('./usersRouter')

function routerApp(app){
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)
}

module.exports = routerApp
