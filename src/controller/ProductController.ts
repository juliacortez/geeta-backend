import { Request, Response} from 'express'
import { ProductBusiness } from '../business/ProductBusiness'
import { Authenticator } from '../services/Authenticator'

export class ProductController {

    async createTag(req: Request, res: Response) {
        try { 
            const { tag_name } = req.body

            const token = req.headers.authorization

            if(!token){
                res.status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers.")
            }

            const authenticador = new Authenticator().getTokenData(token)

            if(authenticador.role !== "ADM"){
                res.status(401)
                .send("Somente administradores podem acessar essa funcionalidade.")
            }

            await new ProductBusiness().createTag(tag_name)

            res.status(200).send("Tag criada com sucesso!")

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async createSize(req: Request, res: Response){
        try {
            
            const { avaliable_sizes } = req.body

            const token = req.headers.authorization

            if(!token){
                res.status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers.")
            }

            const authenticador = new Authenticator().getTokenData(token)

            if(authenticador.role !== "ADM"){
                res.status(401)
                .send("Somente administradores podem acessar essa funcionalidade.")
            }

            await new ProductBusiness().createSize(avaliable_sizes)

            res.status(200).send("Tamanho criado com sucesso!")

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async createProduct(req: Request, res: Response){
        try {

            const {name, price, description, quantity, picture, size, tags} = req.body

            const token = req.headers.authorization

            if(!token){
                res.status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers.")
            }

            const authenticador = new Authenticator().getTokenData(token)

            if(authenticador.role !== "ADM"){
                res.status(401)
                .send("Somente administradores podem acessar essa funcionalidade.")
            }
            
            await new ProductBusiness().createProduct(name, price, description, quantity, picture, size, tags)

            res.status(200).send("Produto criado com sucesso!")
        } catch (error) {
            console.log(error)
        }
        

    }

    async getTags(req: Request, res: Response){
        try {
            
            const tags = await new ProductBusiness().getTags()

            res.status(200).send(tags)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getSizes(req: Request, res: Response){
        try {
            
            const sizes = await new ProductBusiness().getSizes()

            res.status(200).send(sizes)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getAllProducts(req: Request, res: Response) {
        try {
            
            const products = await new ProductBusiness().getAllProducts()

            res.status(200).send(products)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductById(req: Request, res: Response){
        try {
            
            const { id } = req.params

            if(!id){
                res.status(409).send("Informe a identificação do produto")
            }

            const products = await new ProductBusiness().getProductById(id)

            if(!products){
                res.status(404).send("Produto não encontrado :(")
            }

            res.status(200).send(products).end

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            
            const { id } = req.params
            const token = req.headers.authorization

            if(!token){
                res.status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers.")
            }

            const authenticador = new Authenticator().getTokenData(token)

            if(authenticador.role !== "ADM"){
                res.status(401)
                .send("Somente administradores podem acessar essa funcionalidade.")
            }

            await new ProductBusiness().deleteProduct(id)

            res.status(200).send("Produto deletado.")

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteSize(req: Request, res: Response) {
        try {
            
            const { id } = req.params
            const token = req.headers.authorization

            if(!token){
                res.status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers.")
            }

            const authenticador = new Authenticator().getTokenData(token)

            if(authenticador.role !== "ADM"){
                res.status(401)
                .send("Somente administradores podem acessar essa funcionalidade.")
            }

            await new ProductBusiness().deleteSize(id)

            res.status(200).send("Tamanho deletado.")

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteTag(req: Request, res: Response) {
        try {
            
            const { id } = req.params
            const token = req.headers.authorization

            if(!token){
                res.status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers.")
            }

            const authenticador = new Authenticator().getTokenData(token)

            if(authenticador.role !== "ADM"){
                res.status(401)
                .send("Somente administradores podem acessar essa funcionalidade.")
            }

            await new ProductBusiness().deleteTag(id)

            res.status(200).send("Tag deletada.")

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}