import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager{
    createHash = (plainText: string) => {
        const salt = genSaltSync(Number(process.env.BCRYPT_COST))
        const cypherText = hashSync(plainText, salt)
        return cypherText
    }
    compareHash = (
        plainText: string,
        cypherText: string) => {
            return compareSync(plainText, cypherText)
        }
}