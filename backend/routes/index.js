const express = require('express')
const router = express.Router()
const routineController = require('../controllers/routineController')
//const userController = require('../controllers/userController');
//const authController = require('../controllers/authController');
//const messageController = require('../controllers/messageController');
//const { catchErrors } = require('../handlers/errorHandlers')


router.get('/', routineController.index)

module.exports = router