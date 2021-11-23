const db = require('../db/db.js')

class UsersDAO{
    async createUsers(name, email){
       const [id] = await db('users').insert({
            email,
            name: name,
        })
        .returning('id');

    return id;
    }
}

module.exports = new UsersDAO();