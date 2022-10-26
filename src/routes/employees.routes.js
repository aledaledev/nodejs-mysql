import {Router} from 'express';
import { getEmployees, getEmployee,putEmployee,postEmployee,deleteEmployee } from '../controllers/employees.controller.js';

const  router = Router()

router.get('/',getEmployees)

router.get('/:id',getEmployee)

router.post('/', postEmployee)

//router.put('/', putEmployee) -> modifica todo / patch -> modifica lo necesario

router.patch('/:id', putEmployee) 

router.delete('/:id', deleteEmployee)

export default router