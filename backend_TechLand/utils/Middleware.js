import { connection } from 'mongoose';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

import * as responseMessages from '../Constants/ResponseMessages';
import { errorResponse } from '../models/ResponseModels';

export function checkDatabaseConnection(req, res, next) {
    if (connection.readyState !== 1) {
        res.status(INTERNAL_SERVER_ERROR);
        res.send(errorResponse(responseMessages.INTERNAL_SERVER_ERROR));
    }
    next();
}
