import { Router } from 'express';
import UserController from './app/controllers/UserController'
const routes = new Router();

routes.get('/',(req,res)=>{
    return res.json({ok:"tudo certo"});
})

routes.post('/signup', UserController.create)

export default routes;