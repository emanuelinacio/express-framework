import { Router } from 'express';
import userRouter from './user-router';
import productTypeRouter from './productType-router';



// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use( '/product-type', productTypeRouter );

// Export default.
export default baseRouter;
