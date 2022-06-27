import userRepo from '@repos/user-repo';
import productRepo from '@repos/product-repo';
import { IUser } from '@models/user-model';
import { UserNotFoundError } from '@shared/errors';
import { IProduct } from '@models/product-model';

/**
 * Get all users.
 * 
 * @returns 
 */
function getAll(): Promise<IProduct[] | null> {
    return productRepo.getAll();
}


/**
 * Add one user.
 * 
 * @param user 
 * @returns 
 */
function addOne(user: IUser): Promise<void> {
    return userRepo.add(user);
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
    addOne,
    updateOne,
    delete: deleteOne,
} as const;
