import { Router } from 'express';
import userRouter from './user-router';
import productTypeRouter from './productType-router';
import productRouter from './product-router';
import storeRouter from './store-router';
import promotionRouter from './promotion-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use( '/product-types', productTypeRouter );
baseRouter.use( '/products', productRouter );
baseRouter.use( '/stores', storeRouter );
baseRouter.use( '/promotions', promotionRouter );

// Export default.
export default baseRouter;
