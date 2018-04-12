const User = require('../server/models').User

module.exports = {
    truncateUser () {    
        
        User.destroy({ where: {}, truncate: true, cascade: true })
        .then(function(){
            console.log(arguments)
        })
    }
}