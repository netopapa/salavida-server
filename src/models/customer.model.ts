import { BaseModel } from "./base/base.model";
import { Company } from "./company.model";

export class Customer extends BaseModel {
    name = '';
    phone = 0;
    created_at = new Date();
    updated_at = new Date();

    company: Company = new Company();
}