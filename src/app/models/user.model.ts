    export class UserModel{
        id?: string;
        name: string;
        password?: string;
        email: string;
        customerid?: string;
        rol?: string;
        token: string;
        isLogged: Boolean = false; //se usar para validar si un usuairo esta logueado.

    }