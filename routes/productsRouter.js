const express = require('express')
const ProductsService = require('./../services/product.service')

const router = express.Router()
const servicio = new ProductsService()

/* Metodos HTTP */
// Get
router.get('/', findAllProducts)
// Get by ID
router.get('/:id', findProductById)
// Insert
router.post('/', insertNewProduct)
// Update (parcial, no "obliga" a enviar todos los atributos)
router.patch('/:id', updateProductPartial)
// Update normal
router.put('/:id', updateProduct)
// Delete
router.delete('/:id', deleteProduct)


/* Separo responsabilidades en funciones */
async function findAllProducts(request, response){
  const products = await servicio.findAll()
  response.json(products)
}

async function findProductById(request, response, next){
  try {
    const { id } = request.params
    const product = await servicio.find(id)
    response.json(product)
  } catch (error) {
    next(error)
  }
}

async function insertNewProduct(request, response){
  // Parámetros a recibir
  const body = request.body
  const newProduct = await servicio.create(body)
  response.json(newProduct)
}

async function updateProductPartial(request, response, next){
  try {
    // Parámetros a recibir
    const { id } = request.params;
    const body = request.body
    const product = await servicio.update(id, body)
    response.json(product)
  } catch (error) {
    next(error)
  }
}

async function updateProduct(request, response, next){
  try {
    // Parámetros a recibir
    const { id } = request.params;
    const body = request.body
    const product = await servicio.update(id, body)
    response.json(product)
  } catch (error) {
    next(error)
  }
}

async function deleteProduct(request, response, next){
  try {
    // Parámetros a recibir
    const { id } = request.params;
    const resServicio = await servicio.delete(id)
    response.json(resServicio)
  } catch (error) {
    next(error)
  }
}


// Exporto el módulo para su uso
module.exports = router
