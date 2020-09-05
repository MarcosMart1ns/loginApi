import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import auth from '../../config/auth';

export default async (req,res,next)=>{
    //recebe o token JWT através da propriedade authorization dentro do header
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        return res.status(401).json({Erro: "Token inválido"});
    }

    const [,token] =authHeader.split('');

    try {
        const decoded = await promisify(jwt.verify)(token, auth.secret);

        req.userID = decoded.id; // 
    }


}