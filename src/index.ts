//Servidor http com express

import express, { Request, Response, NextFunction} from 'express';

//Instancia a aplicação
const app = express(); //app é uma instancia de express

//Toda vez que chegar um get em /status ele vai responder 200 com um json dentro
app.get('/status', (req: Request, res: Response, next: NextFunction) => { //rota
    res.status(200).send({ foo: 'Sucesso total!'});
});

//A aplicação ira escutar a porta 3000 e resolver as requisiçoes que chegarem
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
});

//run build converte ts em js ?
//para executar node ./dist/index.js
//script "dev" automatiza e executa o js sozinho sempre que houver alteração. Serve para nao ter que rodar a "build" toda hora.