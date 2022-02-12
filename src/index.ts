//Servidor http com express

import express, { Request, Response, NextFunction} from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

//Instancia a aplicação
const app = express(); //app é uma instancia de express

// -------------CONFIGURAÇÃO DA APLICAÇÃO-------------
app.use(express.json()); //Midware responsavel por interpretar o content type e ser for json, lidar com ele

app.use(express.urlencoded({ extended: true}));


// -------------CONFIGURAÇÃO DE ROTAS-------------
app.use(usersRoute); //Aplicação usará essa configuração apartada
app.use(statusRoute);

// -------------CONFIGURAÇÃO DO SERVIDOR-------------
//A aplicação ira escutar a porta 3000 e resolver as requisiçoes que chegarem
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
});


// -------------OBSERVAÇÕES-------------
//run build converte ts em js ?
//para executar node ./dist/index.js
//script "dev" automatiza e executa o js sozinho sempre que houver alteração. Serve para nao ter que rodar a "build" toda hora.