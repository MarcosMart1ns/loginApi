import User from '../database/schemas/User';

class UserController{
    async create(req,res){
        const { nome,email,senha,telefones } = req.body;

        try {

            const user = await User.create({
                nome,
                email,
                senha,
                telefones,
                token: '9aue9jasjdasjdpasp´dka´wskd',
                ultimo_login: new Date()
            });

            return res.status(201).json(user);

        } catch (error) {

            if(error){
                console.log(error);
                return res.status(400).json({
                    Erro_de_validação:" Dados ausentes ou inválidos",
                    modelo: {
                        nome: "string",
                        email: "string",
                        senha: "string",
                        telefones: [
                            {
                                numero: "123456789",
                                ddd: "11"
                            }
                        ]
                    }
                });
            }

        }
    }
}

export default new UserController();