import { Router } from 'express';
import userRouter from './user-router';
import productTypeRouter from './productType-router';
import product from './product-router';
import store from './store-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use( '/product-type', productTypeRouter );
baseRouter.use( '/product', product );
baseRouter.use( '/stores', store );

// Export default.
export default baseRouter;
