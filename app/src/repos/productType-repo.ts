import { IUser } from '@models/user-model';
import { IProductType } from '@models/productType-model ';
import { getRandomInt } from '@shared/functions';
import orm from './orm/mock-orm';
import prisma from './orm/productType-orm';


/**
 * Get one user.
 * 
 * @param id 
 * @returns 
 */
async function getOne(id: number): Promise<IProductType | null> {

    const getOneQuery = prisma.getOneProductType( id );

    if ( getOneQuery !== null ) {
        return getOneQuery;
    }

    return null;
}


/**
 * See if a user with the given id exists.
 * 
 * @param id 
 */
async function persists(idusers: number): Promise<boolean> {
    const db = await orm.openDb();
    for (const user of db.users) {
        if (user.idusers === idusers) {
            return true;
        }
    }
    return false;
}


/**
 * Get all users.
 * 
 * @returns 
 */
async function getAll(): Promise<IProductType[] | null> {

    const getAll = await prisma.getAllProductType();

    if ( getAll !== null ) {
        return getAll;
    }

    return null;
}


/**
 * Add one user.
 * 
 * @param user 
 * @returns 
 */
async function add(user: IUser): Promise<void> {
    const db = await orm.openDb();
    user.idusers = getRandomInt();
    db.users.push(user);
    return orm.saveDb(db);
}


/**
 * Update a user.
 * 
 * @param user 
 * @returns 
 */
async function update(user: IUser): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].idusers === user.idusers) {
            db.users[i] = user;
            return orm.saveDb(db);
        }
    }
}


/**
 * Delete one user.
 * 
 * @param id 
 * @returns 
 */
async function deleteOne(id: number): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === id) {
            db.users.splice(i, 1);
            return orm.saveDb(db);
        }
    }
}


// Export default
export default {
    getOne,
    persists,
    getAll,
    add,
    update,
    delete: deleteOne,
} as const;
