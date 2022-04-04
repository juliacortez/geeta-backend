import { ProductDatabase } from "../data/ProductDatabase"
import { Product, Sizes, Tags } from "../model/Types"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness{

    async createTag(tag: string){
        try {

            const id = new IdGenerator().generate()
            const newTag = new Tags(id, tag)
            await new ProductDatabase().createTag(newTag)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async createSize(size: string){
        try {

            const id = new IdGenerator().generate()
            const newSize = new Sizes(id, size)
            await new ProductDatabase().createSize(newSize)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async createProduct(
        name: string, 
        price: number, 
        description: string, 
        quantity: number, 
        picture: string, 
        size: string[], 
        tags: string[]){
        try {

            const id = new IdGenerator().generate()

            const product = new Product(id, name, price, description, quantity, picture, size, tags)
            await new ProductDatabase().createProduct(product)

        } catch (error) {
            console.log(error)
        }
        
    }

    async getAllProducts(){
        try {
            const products = await new ProductDatabase().getAllProducts()

            return products

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getTags() {
        try {

            const tags = await new ProductDatabase().getTags()

            return tags

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getSizes() {
        try {
            
            const sizes = await new ProductDatabase().getSizes()

            return sizes

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductById(id: string) {
        try {
            const productNameResult = await new ProductDatabase().getProductsTags(id)
            const productSizeResult = await new ProductDatabase().getProductsSizes(id)

            const productsIndex: {[key: string]: number} = {}
            const products: Product[] = []

            productNameResult.forEach((product: any) => {
                const indexInObject = productsIndex[product.id]
                if (indexInObject !== undefined) {
                    products[indexInObject].pushTags(product.tags)
                }
                else {
                    productsIndex[product.id] = products.length
                    const newProduct: any = {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        quantity: product.quantity,
                        picture: product.picture,
                        size: [],
                        tags: product.tags ? [product.tags] : []
                    }

                    const p = Product.toProductModel(newProduct)

                    products.push(p)
                }
            })
                
            productSizeResult.forEach((product: any) => {
                const indexInObject = productsIndex[product.id]
                if (indexInObject !== undefined) {
                    products[indexInObject].pushSize(product.size)
                }
            })

            return products

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteProduct(id: string) {
        try {
            await new ProductDatabase().deleteProduct(id)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteSize(id: string){
        try {
            await new ProductDatabase().deleteSize(id)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteTag(id: string){
        try {
            await new ProductDatabase().deleteTag(id)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}