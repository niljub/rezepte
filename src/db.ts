import pg from 'pg';

const Pool = require('pg').Pool

const config = {
    host: 'localhost', 
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'password'
};

export const pool = new Pool(config);

