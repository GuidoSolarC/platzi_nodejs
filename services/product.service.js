// La idea es tener la logica de negocios en los servicios
const faker = require('faker')
const boom = require('@hapi/boom')

class ProductsService {

    constructor() {
        this.products = []
        this.generate()
    }

    // Metodos "x", se crean segun lo necesitemos
    generate() {
        const limit = 100
        for (let index = 0; index < limit; index++) {
          this.products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
            isBlock: faker.datatype.boolean()
          })
        }
    }

    async create(data) {
      const newProduct = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.products.push(newProduct)
      return newProduct
    }

    async findAll() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.products)
        }, 2500)
      })
    }

    async find(id) {
      const product = this.products.find(item => item.id === id)
      if(!product) { // En caso que objeto no exista en array
        throw boom.notFound('Product not found')
      }
      if(product.isBlock){
        throw boom.conflict('Product is blocked')
      }
      return product
    }

    async update(id, changes) { // Id para buscar, changes con cambios
      const index = this.products.findIndex(item => item.id === id)
      if(index === -1) { // En caso que objeto no exista en array
        throw boom.notFound('Product not found')
      }
      const product =  this.products[index]
      this.products[index] = {
        ...product,
        ...changes
      }
      return this.products[index]
    }

    async delete(id){
      const index = this.products.findIndex(item => item.id === id)
      if(index === -1) { // En caso que objeto no exista en array
        throw boom.notFound('Product not found')
      }
      this.products.splice(index, 1)
      return { message: true, id }
    }


}

module.exports = ProductsService
