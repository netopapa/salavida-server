import express from 'express';
import CompanyController from './controllers/companiesController';
import CustomerController from './controllers/customersController';
import ProductController from './controllers/productsController';

const routes = express.Router();

const customerController: CustomerController = new CustomerController();
const productController: ProductController = new ProductController();
const companyController: CompanyController = new CompanyController();

routes.post('/companies', companyController.create);
routes.get('/companies', companyController.index);
routes.put('/companies', companyController.update);
routes.delete('/companies', companyController.delete);

routes.post('/customers', customerController.create);
routes.get('/customers', customerController.index);
routes.put('/customers', customerController.update);
routes.delete('/customers', customerController.delete);

routes.post('/products', productController.create);
routes.get('/products', productController.index);
routes.put('/products', productController.update);
routes.delete('/products', productController.delete);

export default routes;

