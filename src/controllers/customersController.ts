import { TABLES } from "../constants";
import { Customer } from "../models/customer.model";
import CrudController from "./base/crudController";

export default class CustomerController extends CrudController<Customer> {
    public tableName = TABLES.CUSTOMERS;

    public beforeUpdate(entity: any): void {
        (entity as Customer).updated_at = new Date();
    }
}