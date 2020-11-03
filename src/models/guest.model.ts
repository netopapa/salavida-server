import { BaseModel } from "./base/base.model";

export class Guest extends BaseModel {
    name = '';
    phone = '';
    cpf = '';
    created_at = new Date();
    updated_at = new Date();
}