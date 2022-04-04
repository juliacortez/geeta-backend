enum ROLE {
    ADMIN = "ADM",
    CLIENT = "CLIENT"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: ROLE
    ){}

    getUserId(){
        return this.id
    }

    getUserName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }

    getRole(){
        return this.role
    }

    static toUserModel(data: any){
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private description: string,
        private quantity: number,
        private picture: string,
        private size: string[],
        private tags: string[]
    ){}

    getProductId(){
        return this.id
    }

    getProductName(){
        return this.name
    }

    getProductPrice(){
        return this.price
    }

    getProductDescription(){
        return this.description
    }

    getProductQuantity(){
        return this.quantity
    }
    
    getProductPicture(){
        return this.picture
    }

    getProductSize(){
        return this.size
    }

    getProductTags(){
        return this.tags
    }

    pushTags(tag: string){
        this.tags.push(tag)
    }

    pushSize(size: string){
        this.size.push(size)
    }

    static toProductModel(data: any){
        return new Product(data.id, data.name, data.price, data.description,
            data.quantity, data.picture, data.size, data.tags)
    }
}


export interface AuthenticationData{
    id: string,
    role: ROLE
}

export class Tags{
    constructor(
        private id: string,
        private tag_name: string
    ){}

    getTagId(){
        return this.id
    }

    getTagName(){
        return this.tag_name
    }
}

export class Sizes{
    constructor(
        private id: string,
        private size: string
    ){}

    getSizeId(){
        return this.id
    }

    getSizeName(){
        return this.size
    }
}