
// User schema
export interface IUser {
    idusers: number;
    name: string;
    last_name: string;
    login: string;
    pass: string;
    email: string;
    store_idstore: number;
}


/**
 * Get a new User object.
 * 
 * @returns 
 */
function getNew( idusers: number,  name: string, email: string, last_name:string, login:string, pass:string, store_idstore:number ): IUser {
    return {
        idusers: idusers,
        email,
        name,
        last_name,
        login,
        pass,
        store_idstore
    };
}


/**
 * Copy a user object.
 * 
 * @param user 
 * @returns 
 */
function copy(user: IUser): IUser {
    return {
        idusers: user.idusers,
        email: user.email,
        name: user.name,
        last_name: user.last_name,
        login: user.login,
        pass: user.pass,
        store_idstore: user.store_idstore
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
