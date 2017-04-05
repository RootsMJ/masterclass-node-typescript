

import { NextFunction, Request, Response } from '@types/express';

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction) {

    console.log('API error occured', err);

    res.status(500).json({ errorCode: 'ERR-001', message: err.message });
}
