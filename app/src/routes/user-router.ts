import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import store, { IStore } from '@models/store-model';
import storeRepo from '@repos/store-repo';

import userService from '@services/user-service';
import { ParamMissingError } from '@shared/errors';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const;



/**
 * Get all users.
 */
router.get(p.get, async (_: Request, res: Response) => {
    const users = await userService.getAll();
    return res.status(OK).json({users});
});


/**
 * Add one user.
 */
router.post(p.add, async (req: Request, res: Response) => {

    const paramStore = req.body.store_idstore !== null ? req.body.store_idstore : 0;
    const newUser = { 
        name: req.body.name !== null ? req.body.name : '',
        last_name: req.body.last_name !== null ? req.body.last_name : '',
        login: req.body.login !== null ? req.body.login : '',
        password: req.body.password !== null ? req.body.password : '',
        email: req.body.email !== null ? req.body.email : '',
        store: { 
            connect:{
                idstore: parseInt( paramStore )
            }
        },
    }

    // Fetch data
    await userService.addOne(newUser);
    return res.status(CREATED).end();
});


/**
 * Update one user.
 */
router.put(p.update, async (req: Request, res: Response) => {
    const { user } = req.body;
    // Check param
    if (!user) {
        throw new ParamMissingError();
    }
    // Fetch data
    await userService.updateOne(user);
    return res.status(OK).end();
});


/**
 * Delete one user.
 */
router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
    // Fetch data
    await userService.delete(Number(id));
    return res.status(OK).end();
});


// Export default
export default router;
