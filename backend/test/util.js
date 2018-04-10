const User = require('../server/models').User

module.exports = {
    truncateUser () {    
        console.log("Truncate user table")
        User.destroy({ where: {}, truncate: true, cascade: true })
        .then(function(){
            console.log(arguments)
        })
    }
}