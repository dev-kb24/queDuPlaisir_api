import express from 'express'
const router = express.Router()
import {usersModel} from './models/usersModel.js'
import { addUser,findUser,deleteUser,updateUser } from './controllers/usersController.js';

router.route('/users/add').post(addUser(usersModel));
router.route('/users/get/:id').get(findUser(usersModel));
router.route('/users/remove/:id').delete(deleteUser(usersModel));
router.route('/users/update').put(updateUser(usersModel));

export default router;
