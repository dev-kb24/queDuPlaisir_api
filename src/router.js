import express from 'express'
const router = express.Router()

import {usersModel} from './models/usersModel.js'
import { addUser,findUser,deleteUser,updateUser } from './controllers/usersController.js';

import { customerModel } from './models/customersModel.js';
import { addCustomer,findCustomer,updateCustomer,deleteCustomer } from './controllers/customersController.js';

router.route('/users/add').post(addUser(usersModel));
router.route('/users/find/:id').get(findUser(usersModel));
router.route('/users/remove/:id').delete(deleteUser(usersModel));
router.route('/users/update').put(updateUser(usersModel));

router.route('/customers/add').post(addCustomer(customerModel));
router.route('/customers/find/:id').get(findCustomer(customerModel));
router.route('/customers/remove/:id').delete(deleteCustomer(customerModel));
router.route('/customers/update').put(updateCustomer(customerModel));

export default router;
