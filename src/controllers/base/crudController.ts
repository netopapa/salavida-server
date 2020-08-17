import { Request, Response } from "express";
import { db } from "../../database/connection";
import { BaseModel } from "../../models/base/base.model";


export default class CrudController<T extends BaseModel> {
    public tableName = '';

    public create = async (request: Request, response: Response) => {

        const entity: T = request.body;

        const trx = await db.transaction();
        try {
            const id = await trx(this.tableName).insert(entity, 'id');
            await trx.commit();
            return response.status(201).json({ id: id[0] });
        } catch (error) {
            await trx.rollback();

            console.error(error);

            return response.status(400).json({
                error: 'Unexpected error while creating new product.'
            });
        }
    }

    public update = async (request: Request, response: Response) => {

        const entity: T = request.body;

        if (!Object.hasOwnProperty.call(entity, 'id')) {
            return response.status(400).json({
                error: 'A requisição deve possuir o atributo id.'
            });
        }

        try {
            this.beforeUpdate(entity);
            const id = await db(this.tableName)
                .where('id', '=', entity.id)
                .update(entity, 'id');

            return response.status(201).json({ id: id[0] });
        } catch (error) {
            console.error(error);
            return response.status(400).json({
                error: 'Unexpected error while creating new product.'
            });
        }
    }

    public index = async (request: Request, response: Response) => {

        const filters = request.query as any;
        try {
            const products = await db(this.tableName)
                .where((qb) => {
                    for (const key in filters) {
                        if (Object.hasOwnProperty.call(filters, key)) {
                            const value = filters[key];

                            if (isNaN(value)) {
                                qb.whereRaw(`lower(${key}) like ?`, `%${value.toLowerCase()}%`)
                            } else {
                                qb.where(key, '=', value)
                            }
                        }
                    }
                })
                .select('*');
            // .where('products.name', '=', (filters.name as string) || 'test')
            // .join('users', 'products.id', '=', 'users.id')

            return response.status(200).json(products);
        } catch (error) {
            console.error(error);
            return response.status(400).json({
                error: 'Unexpected error looking creating new product.'
            });
        }
    }

    public delete = async (request: Request, response: Response) => {
        const req = request.query;

        if (!Object.hasOwnProperty.call(req, 'id')) {
            return response.status(400).json({
                error: 'A requisição deve possuir o atributo id.'
            });
        }

        try {
            await db(this.tableName)
                .where('id', '=', req.id as any)
                .del();

            return response.status(201).json();
        } catch (error) {
            console.error(error);
            return response.status(400).json({
                error: 'Unexpected error while creating new product.'
            });
        }
    }

    public beforeUpdate(entity: any): void { }
}