import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import productTypeService from '@services/productType-service';
import productService from '@services/product-service';
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

    console.log( 'dentro product' );

    const product = await productService.getAll();
    return res.status(OK).json({product});
});


/**
 * Add one user.
 */
router.post(p.add, async (req: Request, res: Response) => {
    const { user } = req.body;
    // Check param
    if (!user) {
        throw new ParamMissingError();
    }
    // Fetch data
    await productTypeService.addOne(user);
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
    await productTypeService.updateOne(user);
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
    await productTypeService.delete(Number(id));
    return res.status(OK).end();
});


// Export default
export default router;