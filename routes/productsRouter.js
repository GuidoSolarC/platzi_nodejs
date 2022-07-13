const express = require('express')
const ProductsService = require('./../services/product.service')

const router = express.Router()
const servicio = new ProductsService()

// Get
router.get('/', (request, response) => {
  const products = servicio.findAll()
  response.json(products)
})

// Get by ID
router.get('/:id', (request, response) => {
  const { id } = request.params
  const product = servicio.find(id)
  response.json(product)
})

// Insert
router.post('/', (request, response) => {
  // Parámetros a recibir
  const body = request.body
  const newProduct = servicio.create(body)
  response.json(newProduct)
})

// Update (parcial, no "obliga" a enviar todos los atributos)
router.patch('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  const body = request.body
  const product = servicio.update(id, body)
  response.json(product)
})

// Update normal
router.put('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  const body = request.body
  const product = servicio.update(id, body)
  response.json(product)
})

// Delete
router.delete('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  const resServicio = servicio.delete(id)
  response.json(resServicio)
})

// Exporto el módulo para su uso
module.exports = router
