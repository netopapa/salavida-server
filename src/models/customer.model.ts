import { BaseModel } from "./base/base.model";

export class Company extends BaseModel {
    name = '';
    phone = 0;
    created_at = new Date();
    updated_at = new Date();

    company: Company = new Company();
}