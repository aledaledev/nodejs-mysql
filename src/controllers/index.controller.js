import {pool} from '../db.js'    //si creo mis propios modulos va .js si uso de terceros no 

export const getIndex = async (req,res) => {   //consulta mysql
    const [result] = await pool.query('SELECT 1+1 result')
    res.json(result[0])
}