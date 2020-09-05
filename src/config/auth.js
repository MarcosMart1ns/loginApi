import 'dotenv/config';

export default {
    secret: process.env.SECRET_API,
    //tempo de expiração do Token
    expiresIn: '30m'
}