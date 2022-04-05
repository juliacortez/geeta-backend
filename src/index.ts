import { app } from "./controller/app";
import { ProductController } from "./controller/ProductController";
import { UserController } from "./controller/UserController";

const createUser = new UserController().createUser
const login = new UserController().login
const newProduct = new ProductController().createProduct
const deleteProduct = new ProductController().deleteProduct
const getAllProducts = new ProductController().getAllProducts
const getProductById = new ProductController().getProductById
const createTag = new ProductController().createTag
const createSize = new ProductController().createSize
const getTags = new ProductController().getTags
const getSizes = new ProductController().getSizes
const deleteSize = new ProductController().deleteSize
const deleteTag = new ProductController().deleteTag

app.get('/products', getAllProducts)
app.get('/id/:id', getProductById)
app.get('/tags', getTags)
app.get('/sizes', getSizes)

app.post('/signup', createUser)
app.post('/login', login)
app.post('/create-product', newProduct)
app.post('/create-tag', createTag)
app.post('/create-size', createSize)

app.delete('/product/:id', deleteProduct)
app.delete('/size/:id', deleteSize)
app.delete('/tag/:id', deleteTag)