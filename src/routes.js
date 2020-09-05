import { Router } from 'express';
import SignUpController from './app/controllers/SignUpController'
import SignInController from './app/controllers/SignInController'
const routes = new Router();

routes.get('/',(req,res)=>{
    return res.json({ok:"tudo certo"});
})

routes.post('/signup', SignUpController.create);
routes.post('/signin', SignInController.create);

export default routes;