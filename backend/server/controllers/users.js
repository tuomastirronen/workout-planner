const User = require('../models').User;
const Routine = require('../models').Routine;

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
  try {
  console.log('login')
  
  //const saltRounds = 10
  //const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
  //console.log(hashedPassword)

    const user = await User.findOne({ 
      where: { 
        email: req.body.username
      }
    })

    console.log(req.body.username)
    console.log(user)

    console.log('backend: ', req.body)
    console.log('req:', req.body.password)
    console.log(user)
    console.log('sql user password: ', user.password)


    const passwordCorrect = user === null ?
      false :
      await bcrypt.compare(req.body.password, user.password)

    if (!(user && passwordCorrect)) {
      return res.status(401).send({ error: 'invalid username or password' })
    }

    const userForToken = {
      username: user.email,
      id: user.id
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    res.status(200).send({ token, username: user.username, name: user.name })
  } catch(err) {
    console.log(err)
    res.status(400).send({ error: err})
  }
}

  //res.status(200).send(user)
  // login = async (req, res) => {
  //   console.log('backend: ', req.body)
  //   const saltRounds = 10
  //   const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

  //   return User
  //     .findOne({
  //       where: {
  //         email: req.body.username
  //       }
  //     })
  //     .then(user => {

  //       const userForToken = {
  //         username: user.username,
  //         id: user._id
  //       }

  //       const token = jwt.sign(userForToken, process.env.SECRET)


  //       res.status(200).send({ token, username: user.email, name: user.first_name })
  //     })
  //     .catch(error => res.status(400).send(error))
  // },
//}

//module.exports = {
  // TODO
  // register(req, res) {
  //   console.log('registering user...')
  //   try {
  //     const body = req.body

  //     const saltRounds = 10
  //     //const passwordHash = await bcrypt.hash(body.password, saltRounds)

  //     const user = new User({
  //       username: body.username,
  //       name: body.name,
  //       password: passwordHash
  //     })

  //     const savedUser = await user.save()

  //     res.json(savedUser)
  //   } catch (exception) {
  //     console.log(exception)
  //     res.status(500).json({ error: 'something went wrong...' })
  //   }
  // },

  // login = async (req, res) => {
  //   console.log('backend: ', req.body)
  //   const saltRounds = 10
  //   const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

  //   return User
  //     .findOne({
  //       where: {
  //         email: req.body.username
  //       }
  //     })
  //     .then(user => {

  //       const userForToken = {
  //         username: user.username,
  //         id: user._id
  //       }

  //       const token = jwt.sign(userForToken, process.env.SECRET)


  //       res.status(200).send({token, username: user.email, name: user.first_name })
  //     })
  //     .catch(error => res.status(400).send(error))
  // },

//   list(req, res) {
//     return User
//       .findAll({
//         include: [{
//           model: Routine,
//           as: 'routines',
//         }],
//       })
//       .then(users => res.status(200).send(users))
//       .catch(error => res.status(400).send(error))
//   },

//   retrieve(req, res) {
//     return User
//       .findById(req.params.user_id, {
//         include: [{
//           model: Routine,
//           as: 'routines',
//         }],
//       })
//       .then(user => {
//         if (!user) {
//           return res.status(404).send({
//             message: 'User Not Found',
//           })
//         }
//         return res.status(200).send(user);
//       })
//       .catch(error => res.status(400).send(error));
//   },

//   create(req, res) {
//     return User
//       .create({
//         email: req.body.email,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name
//       })
//       .then(user => res.status(201).send(user))
//       .catch(error => res.status(400).send(error));
//   },

//   update(req, res) {
//     return User
//       .findById(req.params.user_id, {
//         include: [{
//           model: Routine,
//           as: 'routines',
//         }],
//       })
//       .then(user => {
//         if (!user) {
//           return res.status(404).send({
//             message: 'User Not Found',
//           });
//         }
//         return user
//           .update(req.body, { fields: Object.keys(req.body) })
//           .then(() => res.status(200).send(user))  // Send back the updated user.
//           .catch((error) => res.status(400).send(error));
//       })
//       .catch((error) => res.status(400).send(error));
//   },

//   destroy(req, res) {
//     return User
//       .findById(req.params.user_id)
//       .then(user => {
//         if (!user) {
//           return res.status(400).send({
//             message: 'User Not Found',
//           });
//         }
//         return user
//           .destroy()
//           .then(() => res.status(204).send())
//           .catch(error => res.status(400).send(error));
//       })
//       .catch(error => res.status(400).send(error));
//   },
// };