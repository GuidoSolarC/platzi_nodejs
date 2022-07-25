const express = require('express')
const ProductsService = require('./../services/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema')

const router = express.Router()
const servicio = new ProductsService()

/* Metodos HTTP */
// Get
router.get('/', findAllProducts)
// Get by ID
router.get('/:id', validatorHandler(getProductSchema, 'params'), findProductById)
// Insert
router.post('/', validatorHandler(createProductSchema, 'body'), insertNewProduct)
// Update (parcial, no "obliga" a enviar todos los atributos)
router.patch('/:id', 
  validatorHandler(getProductSchema, 'params'), 
  validatorHandler(updateProductSchema, 'body'),
  updateProductPartial
)
// Update normal
router.put('/:id', 
  validatorHandler(getProductSchema, 'params'), 
  validatorHandler(updateProductSchema, 'body'),
  updateProduct
)
// Delete
router.delete('/:id', validatorHandler(getProductSchema, 'params'), deleteProduct)


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
