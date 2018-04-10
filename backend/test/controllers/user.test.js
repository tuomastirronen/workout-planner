//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const User = require('../../server/models').User
const util = require('../util')
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../app');
let should = chai.should();
chai.use(chaiHttp);


describe('users controller', () => {

    it('list all users', (done) => {
        chai.request(app)
            .get('/api/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
            done();
            });
    });

    it('retrieve user', (done) => {
        util.truncateUser();
        var id;
        var user = User.create({            
            email: 'tuomas.tirronen@helsinki.fi',
            first_name: 'Tuomas',
            last_name: 'Tirronen',
            password: 'asdf'
          }).then( function (user) {
            console.log("user created")
            
            chai.request(app)
            .get('/api/users/' + user.id)            
            .end((err, res) => {            
                res.should.have.status(200);
                res.body.should.be.a('object');    
                res.body.should.have.property('first_name').eql('Tuomas');
                done();
            });
          })
    });

    
    // it('create user', (done) => {
    //     let user = {
    //         title: "The Lord of the Rings",
    //         author: "J.R.R. Tolkien",
    //         year: 1954
    //     }
    //     chai.request(server)
    //         .post('/user')
    //         .send(user)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('errors');
    //             res.body.errors.should.have.property('pages');
    //             res.body.errors.pages.should.have.property('kind').eql('required');
    //         done();
    //         });
    // });
});