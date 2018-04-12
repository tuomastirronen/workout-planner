process.env['SECRET'] = 'EWIGHIEWGEWKNGQWJGBEWUGDSOREGREHINW'

const User = require('../../server/models').User
const factory = require('../factories/user')
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
                console.log(res.body)
                res.should.have.status(200);
                res.body.should.be.a('array');                
            done();
            });
    });

    it('should retrieve user', (done) => {
        util.truncateUser();        
        var user = factory.User()
        User.create(user).then( function (data) {
            chai.request(app)
            .get('/api/users/' + data.id)            
            .end((err, res) => {            
                res.should.have.status(200);
                res.body.should.be.a('object');    
                res.body.should.have.property('first_name').eql(data.first_name);
                done();
            });
          })
        util.truncateUser();
    });

    
    it('should create a valid user', (done) => {
        util.truncateUser();
        var user = factory.User()        
        chai.request(app)
            .post('/api/users/')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('email').eql(user.email);
                res.body.should.have.property('first_name').eql(user.first_name);
                res.body.should.have.property('last_name').eql(user.last_name);
            done();
            });
        util.truncateUser();
    });


    it('should modify a user', (done) => {
        util.truncateUser();               
        var user = factory.User()
        User.create(user).then( function (data) {
            chai.request(app)
            .put('/api/users/' + data.id)
            .send({first_name: 'modified', last_name: 'user'})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('first_name').eql('modified');
                res.body.should.have.property('last_name').eql('user');
                done();
            });
        })
        util.truncateUser();
    });

    it('should destroy user', (done) => {
        util.truncateUser();
        var user = factory.User()
        User.create(user).then( function (data) {
            chai.request(app)
            .delete('/api/users/' + data.id)
            .end((err, res) => {
                res.should.have.status(204);
                done();
            });
        })
        util.truncateUser();
    });

    it('should login with correct password', (done) => {
        util.truncateUser();
        var user = factory.User()
        User.create(user).then( function (data) {
            
            chai.request(app)
            .post('/api/login/')
            .send({username: user.email, password: 'salasana'})
            .end((err, res) => {
                res.should.have.status(200);      
            done();
            });
        })
        util.truncateUser();
    });

    it('should not login with incorrect password', (done) => {
        util.truncateUser();
        var user = factory.User()
        User.create(user).then( function (data) {
            chai.request(app)
            .post('/api/login/')
            .send({username: user.email, password: 'vaarasalasana'})
            .end((err, res) => {
                res.should.have.status(401);      
            done();
            });
        })
        util.truncateUser();
    });
});