const usersDAO = require('../dao/users')

class UsersService{
    createUsers(usersDto){
        const { name, email} = usersDto;
        return usersDAO.createUsers(name,email);
    }

}

module.exports = new UsersService();