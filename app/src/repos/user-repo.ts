import { IUser } from '@models/user-model';
import { getRandomInt } from '@shared/functions';
import orm from './orm/mock-orm';
import prisma from './orm/users-orm';


/**
 * Get one user.
 * 
 * @param id 
 * @returns 
 */
async function getOne(id: number): Promise<IUser | null> {

    const getUsersQuery = await prisma.getOneUser( 1 );

    if ( getUsersQuery ) {
        return getUsersQuery;
    }

    return null;
}

/**
 * Get one user.
 * 
 * @param email 
 * @returns 
 */
 async function getOneByEmail(email: string): Promise<IUser | null> {

    const getUsersQuery = await prisma.getUserByEmail( email );

    if ( getUsersQuery ) {
        return getUsersQuery;
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
async function getAll(): Promise<IUser[] | null> {

    const allUsers = await prisma.getAllUsers();

    if ( allUsers !== null ) {
        return allUsers;
    }

    return null;
}


/**
 * Add one user.
 * 
 * @param user 
 * @returns 
 */
async function add(user: IUser) {
    return await prisma.add( user );
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
