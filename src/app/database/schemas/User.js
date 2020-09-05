import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
	email:  {
        type: String,
        required: true,
    },
	senha: {
        type: String,
        required: true,
    },
	telefones:[
        {
            numero:  {
                type: Number,
                required: true,
            },
            ddd:  {
                type: Number,
                required: true,
            },
        
        },
        {
            noId: true,
        },
    ],
    token:{
        type: String,
        required: true,
    },
    ultimo_login:{
        type: Date,
        required: true,
    },
},
{
    timestamps: true,

}
);

UserSchema.pre('save',async function (next) {
    //hashea a senha antes de salvar no mongoDB
    const password = this.senha;
    this.senha = await bcrypt.hash(password,8);
    next()
})

export default mongoose.model('loginapi_Users',UserSchema);