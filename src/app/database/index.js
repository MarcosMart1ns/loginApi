import mongoose from 'mongoose';

class Database{
    constructor(){
        this.mongo();
    }

    mongo(){
        this.connection = mongoose.connect('mongodb+srv://loginapi:123@cluster0.j5isd.mongodb.net/loginapi?retryWrites=true&w=majority',
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true
            }
        )
    }
}

export default new Database();