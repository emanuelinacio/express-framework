import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import promotionService from '@services/promotion-service';
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
    const promotions = await promotionService.getAll();
    return res.status(OK).json({promotions});
});

/**
 * Add one user.
 */
router.post(p.add, async (req: Request, res: Response) => {

    const paramStore = req.body.store_idstore !== null ? req.body.store_idstore : 0;
    const price = req.body.price !== null ? req.body.price : 0;
    const paramProduct = req.body.idproduct !== null ? req.body.idproduct : 0;

    const newPromotion = { 
        name: req.body.name !== null ? req.body.name : '',
        description: req.body.description !== null ? req.body.description : '',
        active: req.body.active !== null ? req.body.active : '',
        price: parseInt( price ),
        store: { 
            connect:{
                idstore: parseInt( paramStore )
            }
        },
        product: { 
            connect:{
                idproduct: parseInt( paramProduct )
            }
        }
    }

    // Fetch data
    await promotionService.addOne(newPromotion);
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
