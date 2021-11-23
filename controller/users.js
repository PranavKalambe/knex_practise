const usersService = require('../service/users');

class UsersController{
    async createUsers(req,res){
        try{
            const id = await usersService.createUsers(req.body);
            res.status(201).json(id);
        } catch(err){
           console.error(err); 
        }
    }
}

module.exports = new UsersController()