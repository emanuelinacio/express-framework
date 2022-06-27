import { Router } from 'express';
import userRouter from './user-router';
import productTypeRouter from './productType-router';
import product from './product-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use( '/product-type', productTypeRouter );
baseRouter.use( '/product', product );

// Export default.
export default baseRouter;
