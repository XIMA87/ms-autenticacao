import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

//get /users
//get /users/:uuid
//post /users
//put /users/:uuid
//delete /users/:uuid

//usersRoute é uma instancia de Router
const usersRoute = Router();

//usersRoute quando receber um get execute a função
usersRoute.get('/users', (req: Request, res:Response, next:NextFunction) => {
    const users = [{ userName: 'Renan'}];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string}>, res:Response, next:NextFunction) => {
    const uuid = req.params.uuid;
    //bancoDeDados.getUsersbyUUiD(uuid) jeito certo de se fazer com bando de dados
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (req: Request, res:Response, next:NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send()
});

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string}>, res:Response, next:NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string}>, res:Response, next:NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute; //exporte aqui e importe na index.ts