import { UserModel } from "./user.model";

export interface CustomerModel{
    id?: string;
    firstName: string;
    email: string;
    password: string;
    userName: UserModel;

}