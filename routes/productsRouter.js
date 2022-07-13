const express = require('express')
const ProductsService = require('./../services/product.service')

const router = express.Router()
const servicio = new ProductsService()

// Get
router.get('/', (req, res) => {
  const products = servicio.findAll()
  res.json(products)
})

// Get by ID
router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = servicio.find(id)
  res.json(product)
})

// Insert
router.post('/', (request, response) => {
  // Parámetros a recibir
  const body = request.body
  response.status(201).json({
    message: 'Creado',
    data: body
  })
})

// Update (parcial, no "obliga" a enviar todos los atributos)
router.patch('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  const body = request.body
  response.status(200).json({
    message: 'Partial update',
    data: body,
    id
  })
})

// Update normal
router.put('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  const body = request.body
  response.status(200).json({
    message: 'Update normal',
    data: body,
    id
  })
})

// Delete
router.delete('/:id', (request, response) => {
  // Parámetros a recibir
  const { id } = request.params;
  response.status(200).json({
    message: 'Item eliminado',
    id
  })
})

// Exporto el módulo para su uso
module.exports = router
