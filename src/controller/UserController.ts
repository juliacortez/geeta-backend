import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../model/Types";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    
    async createUser(req: Request, res: Response) {
        try {

            const { name, email, password, role } = req.body

            if(!name || !email || !password || !role){
                res.status(422).send("Preencha todos os campos")
            }

            const user = await new UserBusiness().findUserByEmail(email)

            if (user) {
                res.status(409).send("Este email já está cadastrado")
            }

            const id = new IdGenerator().generate()
            const userPassword = new HashManager().createHash(password)

            const newUser = new User(id, name, email, userPassword, role)
            await new UserBusiness().createUser(newUser)

            const token = new Authenticator().generate({id, role})

            res.status(200).send({message: "Usuário Criado!", token})
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async login (req: Request, res: Response) {
        try {
            
            const {email, password} = req.body

            if(!email || !password){
                res.status(422).send("Insira as informações 'email' e 'senha' corretamente.")
            }

            const user = await new UserBusiness().findUserByEmail(email)
            if(!user){
                res.status(409).send("Usuário não existente")
            }

            const isPasswordCorrect = new HashManager().compareHash(
                password, user.getPassword()
            )

            if(!isPasswordCorrect){
                res.status(401).send("Email ou senha incorretos.")
            }

            const token = new Authenticator().generate({
                id: user.getUserId(),
                role: user.getRole()
            })

            res.status(200).send({message: "Logado com sucesso!", token})
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}