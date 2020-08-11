import { BaseModel } from "./base/base.model";

export class Company extends BaseModel {
    name = '';
    phone = 0;
    updated_at = new Date();
    created_at = new Date();
}