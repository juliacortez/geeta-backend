import { BaseDatabase } from "./BaseDatabase";


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

class Migrations extends BaseDatabase{
    async createTables () {
        try {
            await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS user_geeta(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role ENUM("ADM", "CLIENT")
            );

            CREATE TABLE IF NOT EXISTS product(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price DOUBLE,
                description VARCHAR(255) NOT NULL,
                quantity INT NOT NULL,
                picture VARCHAR(255)
            );

            CREATE TABLE IF NOT EXISTS all_sizes(
                id VARCHAR(255) PRIMARY KEY,
                avaliable_sizes VARCHAR(255)
            );

            CREATE TABLE IF NOT EXISTS tags(
                id VARCHAR(255) PRIMARY KEY,
                tag_name VARCHAR(255)
            );

            CREATE TABLE IF NOT EXISTS product_size(
                id_product VARCHAR(255),
                id_size VARCHAR(255),
                PRIMARY KEY(id_product, id_size),
                FOREIGN KEY (id_product) REFERENCES product(id),
                FOREIGN KEY (id_size) REFERENCES all_sizes(id)
            );

            CREATE TABLE IF NOT EXISTS product_tags(
                id_product VARCHAR(255),
                id_tag VARCHAR(255),
                PRIMARY KEY(id_product, id_tag),
                FOREIGN KEY (id_product) REFERENCES product(id),
                FOREIGN KEY (id_tag) REFERENCES tags(id)
            );

            CREATE TABLE IF NOT EXISTS product_details(
                id_product VARCHAR(255),
                id_tag VARCHAR(255),
                id_size VARCHAR(255),
                PRIMARY KEY(id_product, id_tag, id_size),
                FOREIGN KEY (id_product) REFERENCES product(id),
                FOREIGN KEY (id_tag) REFERENCES tags(id),
                FOREIGN KEY (id_size) REFERENCES all_sizes(id)
            );
        `)
        .then(() => {
            console.log("Tabelas criadas.")
        })
        } catch (error) {
            printError(error)
        }
    }
}

const createTableMigrations = new Migrations();
createTableMigrations.createTables()
