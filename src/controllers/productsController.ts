import { TABLES } from "../constants";
import { Product } from "../models/product.model";
import CrudController from "./base/crudController";

export default class ProductController extends CrudController<Product> {
    public tableName = TABLES.PRODUCTS;

    public beforeUpdate(entity: any): void {
        (entity as Product).updated_at = new Date();
    }
}