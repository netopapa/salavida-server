import { TABLES } from "../constants";
import { Guest } from "../models/guest.model";
import CrudController from "./base/crudController";

export default class GuestController extends CrudController<Guest> {
    public tableName = TABLES.GUESTS;

    public beforeUpdate(entity: any): void {
        (entity as Guest).updated_at = new Date();
    }
}