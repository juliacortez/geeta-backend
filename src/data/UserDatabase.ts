import { User } from "../model/Types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    async createUser(user: User) {
        try {
            await BaseDatabase.connection("user_geeta")
            .insert({
                id: user.getUserId(),
                name: user.getUserName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async findUserByEmail(email: string) : Promise<User> {
        try {

            const user = await BaseDatabase.connection("user_geeta")
            .select("*")
            .where({ email })

            return user[0] && User.toUserModel(user[0])

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}