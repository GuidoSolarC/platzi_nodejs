// La idea es tener la logica de negocios en los servicios
const faker = require('faker')

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
            image: faker.image.imageUrl()
          })
        }
    }

    create(data) {
      const newProduct = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.products.push(newProduct)
      return newProduct
    }

    find(id) {
        return this.products.find(item => item.id === id)
    }

    findAll() {
        return this.products
    }

    update(id, changes) { // Id para buscar, changes con cambios
      const index = this.products.findIndex(item => item.id === id)
      if(index === -1) { // En caso que objeto no exista en array
        throw new Error('Product not found')
      }
      const product =  this.products[index]
      this.products[index] = {
        ...product,
        ...changes
      }
      return this.products[index]
    }

    delete(id){
      const index = this.products.findIndex(item => item.id === id)
      if(index === -1) { // En caso que objeto no exista en array
        throw new Error('Product not found')
      }
      this.products.splice(index, 1)
      return { message: true, id }
    }


}

module.exports = ProductsService
