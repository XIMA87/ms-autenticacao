import { Pool }  from 'pg';


const connectionString = 'postgres://'; //inserir sua url como por exemplo do site ElephantSQL
const db = new Pool({ connectionString });

export default db;