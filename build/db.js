"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const Pool = require('pg').Pool;
const config = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'password'
};
exports.pool = new Pool(config);
