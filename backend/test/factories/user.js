const faker = require('faker')

module.exports = {
    User () {    
        return {            
            email: faker.internet.email(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            password: faker.internet.password()
        }
    }
}