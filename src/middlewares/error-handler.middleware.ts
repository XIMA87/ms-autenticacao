import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database.error.model";
import ForbiddenError from "../models/errors/forbidden.error.model";


function errorHandler(error: any, req: Request, re: Response, next: NextFunction) {
    if (error instanceof DatabaseError) {
        res.sendStatus(StatusCodes.BAD_REQUEST);    
    } else if (error instanceof ForbiddenError) {
        res.senStatus(statusCodes.FORBIDDEN)
    } else{
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export default errorHandler;