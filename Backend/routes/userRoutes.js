const express = require('express');
const path = require('path');
const router = express.Router();

const {addUser,getUsers,getLoggedInUsers} = require('../controllers/userController');
const { loginUser } = require('../controllers/authController');

router.post('/add',addUser);
router.get('/',getUsers);
router.post('/login', loginUser);

module.exports = router;