const faker = require('faker')

module.exports = {
    // return valid user json
    User () {    
        return {            
            email: faker.internet.email(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            password: faker.internet.password()
        }
    }
}