import { body, validationResult }  from 'express-validator';

class emailVerify{
    validate(){
        return [body('email').isEmail()]
    }

    verify(){
        return (req,res,next)=>{
            const emailValidation = validationResult(req);
            
            if(!emailValidation.isEmpty()){
                return res.status(400).json({ error: 'email inválido' }); 
            }
            return next();
        }
    }

}

export default new emailVerify();