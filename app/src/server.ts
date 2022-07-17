import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import apiRouter from './routes/api';
import logger from 'jet-logger';
import { CustomError } from '@shared/errors';


// Constants
const app = express();


/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// Set Cors
app.use(function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    res.setHeader( 'Access-Control-Request-Headers', '*' );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    next();
  });

/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/

// Add api router
app.use('/api', apiRouter);

// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
    return res.status(status).json({
        error: err.message,
    });
});


/***********************************************************************************
 *                                  Front-end content
 **********************************************************************************/

// Set views dir
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);

// Set static dir
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Serve index.html file
app.get('*', (_: Request, res: Response) => {
    res.sendFile('index.html', {root: viewsDir});
});



// Export here and start in a diff file (for testing).
export default app;
