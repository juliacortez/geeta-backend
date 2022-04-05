import { Product, Sizes, Tags } from "../model/Types";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{

    async createTag(tag: Tags){
        try{
            await BaseDatabase.connection("tags")
            .insert({
                id: tag.getTagId(),
                tag_name: tag.getTagName()
            })
        } catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async createSize(size: Sizes){
        try {
            await BaseDatabase.connection("all_sizes")
            .insert({
                id: size.getSizeId(),
                avaliable_sizes: size.getSizeName()
            })
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async createProduct(product: Product) {
        try {
            await BaseDatabase.connection("product")
            .insert({
                id: product.getProductId(),
                name: product.getProductName(),
                price: product.getProductPrice(),
                description: product.getProductDescription(),
                quantity: product.getProductQuantity(),
                picture: product.getProductPicture()
            })
            for (let t of product.getProductTags()) {
                await BaseDatabase.connection("product_tags")
                .insert({
                    id_product: product.getProductId(),
                    id_tag: t,
                })
            
            for (let s of product.getProductSize()) {
            await BaseDatabase.connection("product_size")
            .insert({
                id_product: product.getProductId(),
                id_size: s
            })
        }}
        } catch (error) {
            console.log(error)
        }
    }

    async getAllProducts() : Promise<Product[]> {
        try {
            const products = await BaseDatabase.connection("product")
            .select("*").limit(10)

            return products.map((product) => Product.toProductModel(product))

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductsTags(id: string) : Promise<any> {
        try {
            const product = await BaseDatabase.connection
                .select(["product.*", "tags.tag_name as tags"]).table("product")
                .leftJoin("product_tags", "product_tags.id_product", "product.id")
                .leftJoin("tags", "product_tags.id_tag", "tags.id")
                .where('product.id', '=', `${id}`)

            return product

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductsSizes(id: string) : Promise<any> {
        try {
            const product = await BaseDatabase.connection
            .select(["product.*", "all_sizes.avaliable_sizes as size"]).table("product")
                .leftJoin("product_size", "product_size.id_product", "product.id")
                .leftJoin("all_sizes", "product_size.id_size", "all_sizes.id")
                .where('product.id', '=', `${id}`)

            return product
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getTags() : Promise<Tags[]> {
        try{
            const tags = await BaseDatabase.connection("tags")
            .select("*")
            
            return tags

        }catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getSizes() : Promise<Sizes[]> {
        try{
            const sizes = await BaseDatabase.connection("all_sizes")
            .select("*")
            
            return sizes
            
        }catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteProduct(id: string) : Promise<void> {
        try {
            await BaseDatabase.connection("product_details")
                .delete()
                .where({ id_product: id })
            await BaseDatabase.connection("product_size")
                .delete()
                .where({id_product: id})
            await BaseDatabase.connection("product_tags")
                .delete()
                .where({id_product: id})
            await BaseDatabase.connection("product")
                .delete()
                .where({id})

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteSize(id: string) : Promise<void>{
        try {
            await BaseDatabase.connection("all_sizes")
                .delete()
                .where({id})
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteTag(id: string) : Promise<void>{
        try {
            await BaseDatabase.connection("tags")
                .delete()
                .where({id})
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}