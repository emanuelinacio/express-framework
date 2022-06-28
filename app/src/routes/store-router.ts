import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import storeService from '@services/store-service';
import userService from '@services/user-service';
import { ParamMissingError } from '@shared/errors';

import store, { IStore } from '@models/store-model';

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
    const stores = await storeService.getAll();
    return res.status(OK).json({stores});
});


/**
 * Add one store.
 */
router.post(p.add, async (req: Request, res: Response) => {
    //const { user } = req.body;
    //const { store } = req.body;

    const newStore = { 
        name: req.body.name !== null ? req.body.name : '',
        description: req.body.description !== null ? req.body.description : '',
        featured_image: req.body.featured_image !== null ? req.body.featured_image : '',
        logo_image: req.body.logo_image !== null ? req.body.logo_image : '',
        slug: req.body.slug !== null ? req.body.slug : '',
        address: req.body.address !== null ? req.body.address : '',
        open: req.body.open !== null ? new Date( req.body.open ) : new Date("2000-00-00T00:00:00"),
        closed: req.body.closed !== null ? new Date( req.body.closed ) : new Date("2000-00-00T00:00:00"),
    }

    console.log( newStore.open );
    console.log( newStore.closed );
    //console.log( store );

    // Check param
    if (!store) {
        throw new ParamMissingError();
    }
    // Fetch data
    await storeService.addOne(newStore);
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
