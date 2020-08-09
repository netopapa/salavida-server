import express from 'express';
import ProductsController from './controllers/productsController';

const routes = express.Router();

const productsController: ProductsController = new ProductsController();

routes.post('/products', productsController.create);
routes.get('/products', productsController.index);

export default routes;

