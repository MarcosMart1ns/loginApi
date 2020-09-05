import User from "../database/schemas/User";
import { differenceInMinutes } from 'date-fns';

class UsersController{
    async index(req,res){
        const { id } = req.params
        
        const user = await User.findOne({
            _id: id
        })

        if(user.email != req.userEmail){
            return res.status(401).json({ERRO:"Não autorizado, você está tentando visualizar dados de outro usuário"});
        }

        if(user.token!=req.userToken){
            return res.status(401).json({ERRO:"Não autorizado"});
        }

        const timeDiference = differenceInMinutes(new Date(),user.ultimo_login)
            console.log(timeDiference);
        if(timeDiference>29){
            return res.status(401).json({ERRO:"Sessão inválida"});
        }


        const {
            _id,
            nome,
            email,
            telefones,
            createdAt,
            updatedAt,
            ultimo_login,
            token
        } = user
        
        return res.status(201).json({
            _id,
            nome,
            email,
            telefones,
            createdAt,
            updatedAt,
            ultimo_login,
            token
        });
    }
    
}

export default new UsersController();