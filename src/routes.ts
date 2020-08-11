import express from 'express';
import ProductsController from './controllers/productsController';

const routes = express.Router();

const productsController: ProductsController = new ProductsController();

routes.post('/products', productsController.create);
routes.get('/products', productsController.index);
routes.put('/products', productsController.update);
routes.delete('/products', productsController.delete);

export default routes;

