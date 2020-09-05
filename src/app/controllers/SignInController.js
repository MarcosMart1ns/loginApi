import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../database/schemas/User'
import auth from '../../config/auth';

class SignInController{
    async create(req,res){
        const { email, senha } = req.body;

        if(!(email && senha)){
            return res.status(400).json({
                ERRO: 'Propriedades ausentes ou incorretas',
                modelo: {
                    "email": "string@email.com",
                    "senha": "string"
                }
            });
        }

        const user = await User.findOne({
            email: email,
        })

        if(!user){
            return res.status(401).json({ERRO:'Usuário e/ou senha inválidos'});
        }

        const checkPassword = await bcrypt.compare(senha,user.senha);

        if(!checkPassword){
            return res.status(401).json({ERRO:'Usuário e/ou senha inválidos'});
        }
        
        user.ultimo_login = new Date()
        user.token = jwt.sign({email},auth.secret,{
            expiresIn: auth.expiresIn,
        }),
        
        await user.save();

        const {
            id,
            nome,
            telefones,
            createdAt,
            updatedAt,
            ultimo_login,
            token
        } = user

        return res.status(201).json({
            id,
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

export default new SignInController();