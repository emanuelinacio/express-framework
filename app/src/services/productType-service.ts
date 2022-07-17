import userRepo from '@repos/user-repo';
import productTypeRepo from '@repos/productType-repo';
import { IUser } from '@models/user-model';
import { UserNotFoundError } from '@shared/errors';
import { IProductType } from '@models/productType-model '


/**
 * Get all users.
 * 
 * @returns 
 */
function getAll(): Promise<IProductType[] | null> {
    return productTypeRepo.getAll();
}

/**
 * Add one productType.
 * 
 * @param productType 
 * @returns 
 */
function addOne(productType: any) {
    return productTypeRepo.add(productType);
}

/**
 * Get one store.
 * 
 * @returns 
 */
 function getOne(id: number): Promise<IProductType | null> {
    return productTypeRepo.getOne( id );
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
async function deleteOne(id: number): Promise<number> {

    const persists = await productTypeRepo.getOne( id );

    console.log( id );

    if (!persists) {
        throw new UserNotFoundError();
    }

    return productTypeRepo.delete( id );
}

// Export default
export default {
    getAll,
    addOne,
    getOne,
    updateOne,
    delete: deleteOne,
} as const;
