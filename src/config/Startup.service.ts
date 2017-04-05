import { Application, Router } from 'express';
import { errorHandler } from '../middleware/errorHandler';
import * as cardRouter from '../routes/cards.routes';

export class Startup {

    public static initializeRoutes(app: Application) {

        app.use('/api/cards', cardRouter);
    }

    public static initializeMiddleware(app: Application) {
        app.use(errorHandler);
    }
    constructor() { }
}
