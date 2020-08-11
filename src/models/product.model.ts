import { BaseModel } from "./base/base.model";

export class Product extends BaseModel {
    name = '';
    price = 0;
    created_at = new Date();
    updated_at = new Date();
}