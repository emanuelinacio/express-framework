import userRepo from '@repos/user-repo';
import { IUser } from '@models/user-model';
import { UserNotFoundError } from '@shared/errors';
import { IStore } from '@models/store-model';
import storeRepo from '@repos/store-repo';


/**
 * Get all stores.
 * 
 * @returns 
 */
function getAll(): Promise<IStore[] | null> {
    return storeRepo.getAll();
}

/**
 * Get one store.
 * 
 * @returns 
 */
 function getOne(id: number): Promise<IStore | null> {
    return storeRepo.getOne( id );
}

/**
 * Add one user.
 * 
 * @param store 
 * @returns 
 */
function addOne(store: any){
    return storeRepo.add(store);
}

/**
 * Update one user.
 * 
 * @param user 
 * @returns 
 */
async function updateOne(user: IUser): Promise<void> {
    const persists = await userRepo.persists(user.idusers);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return userRepo.update(user);
}

/**
 * Delete a user by their id.
 * 
 * @param id 
 * @returns 
 */
async function deleteOne(id: number): Promise<void> {
    const persists = await userRepo.persists(id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return userRepo.delete(id);
}

// Export default
export default {
    getAll,
    getOne,
    addOne,
    updateOne,
    delete: deleteOne,
} as const;
