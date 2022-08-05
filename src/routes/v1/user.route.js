import { Router } from 'express';
import UsersController from '../../controllers/user.js';

const router = Router();

router.post('/signup', UsersController.handleNewUser); // register a new User
router.post('/login', UsersController.loginUser); // login a user

export default router;
