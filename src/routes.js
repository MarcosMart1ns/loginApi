import { Router } from 'express';

import SignUpController from './app/controllers/SignUpController';
import SignInController from './app/controllers/SignInController';
import UsersController from './app/controllers/UsersController';
import Home from './app/controllers/Home';
import authorizationVerify from './app/middlewares/authorizationVerify';
import emailVerify from './app/middlewares/emailVerify';


const routes = new Router();

routes.get('/', Home.show);

routes.get('/users/:id',authorizationVerify, UsersController.index);

routes.use(emailVerify.validate());
routes.use(emailVerify.verify());

routes.post('/signup', SignUpController.create);
routes.post('/signin', SignInController.create);

export default routes;