import { Request, Response } from "express";
import { db } from "../database/connection";

export default class ProductsController {
    async create(request: Request, response: Response) {

        const entity = request.body;

        const trx = await db.transaction();

        try {
            const id = trx('products').insert(entity);
            await trx.commit();
            return response.status(201).json({ id });
        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new product.'
            });
        }
    }

    async index(request: Request, response: Response) {
        const filters = request.query;

        const entity = request.body;

        try {

            const products = await db('products')
                .where('products.name', '=', (filters.name as string) || 'test')
                // .join('users', 'products.id', '=', 'users.id')
                .select('*');
                
            return response.status(200).json(products);
        } catch (error) {
            console.log(error);
            return response.status(400).json({
                error: 'Unexpected error looking creating new product.'
            });
        }
    }
}