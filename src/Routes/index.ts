import { Router } from "express";
import { UserController } from "../Controllers/usersController";
import { ProductController } from "../Controllers/productsController";
import { CategoryController } from "../Controllers/categorysController";
import { CompanyController } from "../Controllers/companyController";
import { CartController } from "../Controllers/cartController";

const Routes=Router()

//Usuarios
Routes.get('/users',UserController.getUserAll)
Routes.post('/login',UserController.loginUser)
Routes.post('/register',UserController.createUser)
Routes.get('/users/:id',UserController.getUserId)
Routes.post('/products/:id',UserController.updateUser)
Routes.delete('/products/:id',UserController.deleteUser)

//Produtos
Routes.get('/products',ProductController.getProductsAll)
Routes.post('/products',ProductController.createProduct)
Routes.get('/products/:id',ProductController.getProductId)
Routes.post('/products/:id',ProductController.updateProduct)
Routes.delete('/products/:id',ProductController.deleteProduct)

//Categorias
Routes.get('/categorys',CategoryController.getCategorysAll)
Routes.post('/categorys',CategoryController.createCategory)
Routes.get('/categorys/:id',CategoryController.getCategoryId)
Routes.post('/categorys/:id',CategoryController.updateCategory)
Routes.delete('/categorys/:id',CategoryController.deleteCategory)

//Carrinho
Routes.get('/cart',CartController.getCart) 
Routes.post('/cart',CartController.addProductCart)
Routes.get('/cart/product/:id',CartController.getProductIdCart)
Routes.post('/cat/product/:id',CartController.addProductCart)
Routes.delete('/cart/product/:id',CartController.deleteProductCart)

//Empresa
Routes.get('/companys',CompanyController.getCompanysAll)
Routes.post('/companys',CompanyController.updateCompany)
Routes.get('/companys/:id',CompanyController.getCompanyId)
Routes.post('/companys/:id',CompanyController.updateCompany)
Routes.delete('/companys/:id',CompanyController.deleteCompany)


export default Routes