import mongoose from 'mongoose';

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
        }
        }
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

export default mongoose.model('loginapi_Users',UserSchema);