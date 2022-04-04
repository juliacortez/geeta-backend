import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/Types";

export class Authenticator{
    generate(input: AuthenticationData): string{
        const token = jwt.sign(input, process.env.JWT_KEY, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })

        return token
    }

    getTokenData(token: string): AuthenticationData {
        const data = jwt.verify(token, process.env.JWT_KEY)
        return data as AuthenticationData
    }
}