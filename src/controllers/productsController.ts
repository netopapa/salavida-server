import { Request, Response } from "express";
import { TABLES } from "../constants";
import { db } from "../database/connection";
import { Product } from "../models/product.model";
import CrudController from "./base/crudController";

export default class ProductsController extends CrudController<Product> {
    public tableName = TABLES.PRODUCTS;

    public beforeUpdate(entity: any): void { 
        (entity as Product).updated_at = new Date();
    }
}