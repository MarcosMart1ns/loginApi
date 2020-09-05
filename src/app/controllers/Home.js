class Home{
    show(req,res){
        return res.status(200).json({
            loginapi: 'handle a simple singin,singup and user data query',
            by: 'Marcos Martins',
            github: 'https://github.com/xMartinezZz/loginApi'
        })
    }
}

export default new Home();