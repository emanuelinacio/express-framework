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
    single: '/single/:id',
    update: '/update',
    delete: '/delete/:id',
} as const;

/**
 * Get all users.
 */
router.get(p.get, async (_: Request, res: Response) => {
    const product = await productService.getAll();
    return res.status(OK).json({product});
});

/**
 * Add one product.
 */
router.post(p.add, async (req: Request, res: Response) => {

    const paramStore = req.body.store_idstore !== null ? req.body.store_idstore : 0;
    const paramProductType = req.body.idproduct_type !== null ? req.body.idproduct_type : 0;
    const price = req.body.price !== null ? req.body.price : 0;

    const newProduct = { 
        name: req.body.name !== null ? req.body.name : '',
        description: req.body.description !== null ? req.body.description : '',
        image: req.body.image !== null ? req.body.image : '',
        price: parseInt( price ),
        store: { 
            connect:{
                idstore: parseInt( paramStore )
            }
        },
        productType: { 
            connect:{
                idproduct_type: parseInt( paramProductType )
            }
        },
    }

    // Fetch data
    await productService.addOne(newProduct);
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
