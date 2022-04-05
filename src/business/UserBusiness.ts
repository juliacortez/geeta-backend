import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/Types";

export class UserBusiness {
    async createUser(newUser: User) : Promise<void> {
        try {

            const user = await new UserDatabase().createUser(newUser)
            return user

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async findUserByEmail(email: string) {
        try {
            
            const user = await new UserDatabase().findUserByEmail(email)
            return user 

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}