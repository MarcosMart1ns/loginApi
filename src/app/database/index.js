import 'dotenv/config';
import mongoose from 'mongoose';

class Database{
    constructor(){
        this.mongo();
    }

    mongo(){
        this.connection = mongoose.connect(process.env.DB_URL,
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true
            }
        )
    }
}

export default new Database();