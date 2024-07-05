import config from './src/configs/db-config.js'
import pkg from 'pg'
const { Client } = pkg;

// https://node-postgress.com/apis/client

const client = new Client(config);
await Client.connect();


/*
let sql = `SELECT * from provinces`; // `... limit 5`
let result = await client.query(config);
await client.end();
// 'rows' es un array. rows[0] el 1er registro
console.log(result.rows);
*/