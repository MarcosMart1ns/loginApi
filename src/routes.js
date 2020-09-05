import { Router } from 'express';

import SignUpController from './app/controllers/SignUpController'
import SignInController from './app/controllers/SignInController'
import UsersController from './app/controllers/UsersController'
import authorizationVerify from './app/middlewares/authorizationVerify'

const routes = new Router();

routes.get('/',(req,res)=>{
    return res.json({ok:"tudo certo"});
})

routes.post('/signup', SignUpController.create);
routes.post('/signin', SignInController.create);
routes.use(authorizationVerify);
routes.get('/users/:id', UsersController.index);

export default routes;