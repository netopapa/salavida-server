import { TABLES } from "../constants";
import { Company } from "../models/company.model";
import CrudController from "./base/crudController";

export default class CompanyController extends CrudController<Company> {
    public tableName = TABLES.COMPANIES;

    public beforeUpdate(entity: any): void {
        (entity as Company).updated_at = new Date();
    }
}