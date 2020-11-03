import express from 'express';
import CompanyController from './controllers/companiesController';
import CustomerController from './controllers/customersController';
import GuestController from './controllers/guestsController';
import ProductController from './controllers/productsController';

const routes = express.Router();

const customerController: CustomerController = new CustomerController();
const productController: ProductController = new ProductController();
const companyController: CompanyController = new CompanyController();
const guestController: GuestController = new GuestController();

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

routes.post('/guests', guestController.create);
routes.get('/guests', guestController.index);
routes.put('/guests', guestController.update);
routes.delete('/guests', guestController.delete);

export default routes;

