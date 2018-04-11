const faker = require('faker')

module.exports = {
    // return valid user json
    User () {    
        return {            
            email: faker.internet.email(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            password: '$2a$10$z.O/ZrKNkCU9nq36NC9J2.o4GtfH8TfnP37lZq65wlvmUrbT0Bd8G'
        }
    }
}