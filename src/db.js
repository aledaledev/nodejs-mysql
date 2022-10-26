//using fist version by default (no promise)
import {createPool} from 'mysql2/promise'   

import {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE} from './config.js'

//creando un pool de mysql 
export const pool = createPool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT,
    database:DB_DATABASE
})